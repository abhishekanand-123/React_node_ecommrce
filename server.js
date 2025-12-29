
require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const Stripe = require("stripe");

// ================== STRIPE SECRET KEY ==================

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// --------------------------------------------
// MYSQL DATABASE CONNECTION
// --------------------------------------------
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_registration",
});

db.connect((err) => {
  if (err) {
    console.error("DB Connection Failed:", err);
    return;
  }
  console.log("MySQL Connected");
});

// --------------------------------------------
// MULTER FILE UPLOAD SETUP
// --------------------------------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// --------------------------------------------
// 1️⃣ TESTIMONIALS API
// --------------------------------------------
app.get("/testimonials", (req, res) => {
  db.query("SELECT * FROM testimonials", (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(result);
  });
});

// --------------------------------------------
// 2️⃣ PRODUCTS API
// --------------------------------------------

// Get all products
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(result);
  });
});

// Get product details
app.get("/products/:id", (req, res) => {
  db.query("SELECT * FROM products WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(result[0]);
  });
});
// payment
// app.get("/payment-details/:session_id", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.retrieve(
//       req.params.session_id,
//       { expand: ["payment_intent", "customer"] }
//     );

//     res.json({
//       transaction_id: session.payment_intent?.id,
//       amount: session.amount_total / 100,
//       currency: session.currency,
//       email: session.customer_details?.email,
//       name: session.customer_details?.name,
//       address: session.customer_details?.address,
//       status: session.payment_status,
//     });

//   } catch (err) {
//     console.error("Fetch payment error:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// });


app.post("/save-transaction", async (req, res) => {
  const { session_id, user_id } = req.body;

  try {
    const session = await stripe.checkout.sessions.retrieve(
      session_id,
      { expand: ["payment_intent", "customer"] }
    );

    const transaction_id = session.payment_intent.id;
    const amount = session.amount_total / 100;
    const currency = session.currency;
    const email = session.customer_details?.email;
    const status = session.payment_status;

    // 1️⃣ Save transaction
    db.query(
      `INSERT INTO transactions (user_id, transaction_id, amount, currency, email, status)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [user_id, transaction_id, amount, currency, email, status]
    );

    // 2️⃣ Move cart → order_items
    db.query(
      "INSERT INTO order_items (order_id, product_id, quantity) SELECT ?, product_id, qty FROM carts WHERE user_id=?",
      [transaction_id, user_id]
    );

    // 3️⃣ Clear cart
    db.query("DELETE FROM carts WHERE user_id=?", [user_id]);

    res.json({ success: true, transaction_id });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/transaction-details/:transaction_id", (req, res) => {
  const { transaction_id } = req.params;

  // 1️⃣ Fetch transaction
  db.query(
    "SELECT * FROM transactions WHERE transaction_id = ? LIMIT 1",
    [transaction_id],
    (err, transactionResult) => {
      if (err) return res.status(500).json({ error: err.message });
      if (transactionResult.length === 0)
        return res.status(404).json({ message: "Transaction not found" });

      const transaction = transactionResult[0];

      // 2️⃣ Fetch ordered products
      db.query(
        `
        SELECT 
          oi.product_id,
          oi.quantity,
          p.title,
          p.price
        FROM order_items oi
        JOIN products p ON p.id = oi.product_id
        WHERE oi.order_id = ?
        `,
        [transaction.transaction_id],
        (err2, products) => {
          if (err2) return res.status(500).json({ error: err2.message });

          // 3️⃣ Send ALL data
          res.json({
            transaction,
            products,
          });
        }
      );
    }
  );
});


// Add new product
app.post("/products", upload.single("image"), (req, res) => {
  const { title, price, description } = req.body;
  const image = req.file ? req.file.filename : null;

  db.query(
    "INSERT INTO products (title, price, description, image) VALUES (?, ?, ?, ?)",
    [title, price, description, image],
    (err, result) => {
      if (err) return res.status(500).json({ message: "DB Error" });
      res.json({ message: "Product Added", productId: result.insertId });
    }
  );
});

// --------------------------------------------
// 3️⃣ CART SYSTEM
// --------------------------------------------

// Add to cart
app.post("/cart/add", (req, res) => {
  const { user_id, product_id, qty } = req.body;

  if (!user_id || !product_id || !qty)
    return res.status(400).json({ message: "user_id, product_id, qty required" });

  db.query("SELECT * FROM carts WHERE user_id = ? AND product_id = ?", [user_id, product_id], (err, result) => {
    if (err) return res.status(500).json({ error: "DB error" });

    if (result.length > 0) {
      db.query("UPDATE carts SET qty = qty + ? WHERE user_id = ? AND product_id = ?", [qty, user_id, product_id], () => {
        res.json({ message: "Cart updated successfully" });
      });
    } else {
      db.query("INSERT INTO carts (user_id, product_id, qty) VALUES (?, ?, ?)", [user_id, product_id, qty], () => {
        res.json({ message: "Added to cart" });
      });
    }
  });
});

// Get cart
app.get("/cart/:user_id", (req, res) => {
  db.query(
    `SELECT c.id AS cart_id, c.qty,
            p.id AS product_id, p.title, p.price, p.image
     FROM carts c JOIN products p ON c.product_id = p.id 
     WHERE c.user_id = ?`,
    [req.params.user_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: "DB error" });
      res.json(result);
    }
  );
});

// Remove from cart
app.delete("/cart/remove/:id", (req, res) => {
  db.query("DELETE FROM carts WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json({ message: "Item removed from cart" });
  });
});

// Update cart qty
app.post("/cart/update", (req, res) => {
  const { cart_id, qty } = req.body;
  db.query("UPDATE carts SET qty = ? WHERE id = ?", [qty, cart_id], () => {
    res.json({ message: "Quantity updated" });
  });
});

// --------------------------------------------------------------------
// ⚡ STRIPE CHECKOUT - CREATE SESSION API
// --------------------------------------------------------------------
// app.post("/create-checkout-session", async (req, res) => {
//   const { amount } = req.body;

//   if (!amount) return res.status(400).json({ error: "Amount is required" });

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: { name: "Order Payment" },
//             unit_amount: amount * 100,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: "http://localhost:3000/thank-you",
//       cancel_url: "http://localhost:3000/checkout",
//     });

//     return res.json({ url: session.url });  // <<-- Only this will fix issue

//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });






// sahi code hai

// app.post("/create-checkout-session", async (req, res) => {
//   const { amount } = req.body;

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     billing_address_collection: "required",  

//     customer_creation: "always",
//     customer_email: "guest@example.com",     
    
//     metadata: {
//       name: "Guest User",                   
//       address: "India Default Address"
//     },

//     line_items: [{
//       price_data: {
//         currency: "inr",
//         product_data: { name: "Checkout Payment" },
//         unit_amount: amount * 100,
//       },
//       quantity: 1,
//     }],

//     mode: "payment",
//     success_url: "http://localhost:3000/thank-you",
//     cancel_url: "http://localhost:3000/checkout"
//   });

//   res.json({ url: session.url });
// });

// old_backup
// app.post("/create-checkout-session", async (req, res) => {
//   const { amount } = req.body;

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],

//       billing_address_collection: "required",

//       customer_creation: "always",
//       customer_email: "guest@example.com",

//       metadata: {
//         name: "Guest User",
//         address: "India Default Address"
//       },

//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: { name: "Checkout Payment" },
//             unit_amount: Math.round(amount * 100),
//           },
//           quantity: 1,
//         },
//       ],

//       mode: "payment",

//       // 🔥 VERY IMPORTANT CHANGE
//       success_url: "http://localhost:3000/thank-you?session_id={CHECKOUT_SESSION_ID}",
//       cancel_url: "http://localhost:3000/checkout",
//     });

//     res.json({ url: session.url });
//   } catch (err) {
//     console.error("Stripe error:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// });

app.post("/create-checkout-session", async (req, res) => {
  const { amount, user_id } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "required",
      customer_creation: "always",

      line_items: [{
        price_data: {
          currency: "inr",
          product_data: { name: "Order Payment" },
          unit_amount: amount * 100,
        },
        quantity: 1,
      }],

      mode: "payment",

      success_url: `http://localhost:3000/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "http://localhost:3000/checkout",
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// --------------------------------------------
// START SERVER
// --------------------------------------------
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
