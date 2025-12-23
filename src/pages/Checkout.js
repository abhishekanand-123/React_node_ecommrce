// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom"; // <-- added
// import "./Checkout.css"; // optional CSS

// function Checkout() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const totalAmount = location.state?.totalAmount || 0; // <-- get total

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     address: "",
//     phone: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send data to backend (store order)
//     await fetch("http://localhost:5000/order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         ...form,
//         totalAmount: totalAmount,
//       }),
//     });

//     alert("Order placed successfully!");

//     // Clear Cart from backend
//     await fetch(`http://localhost:5000/cart/clear/1`, {
//       method: "DELETE",
//     });

//     navigate("/thank-you", { state: { totalAmount } });
//   };

//   return (
//     <div className="checkout-container">
//       <h2>Checkout</h2>

//       <h3 className="total-box">Total Payable: ₹{totalAmount}</h3> {/* <-- Added */}

//       <form onSubmit={handleSubmit} className="checkout-form">
//         <input
//           name="name"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="phone"
//           placeholder="Phone Number"
//           value={form.phone}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="address"
//           placeholder="Address"
//           value={form.address}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit" className="place-order-btn">
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Checkout;



// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./Checkout.css";

// function Checkout() {
//   const location = useLocation();
//   const totalAmount = location.state?.totalAmount || 0;

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     address: "",
//     phone: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleStripePayment = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/create-checkout-session", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: totalAmount })
//       });

//       const data = await response.json();
//       console.log("Stripe URL =>", data.url);

//       window.location.href = data.url;
//     } catch (error) {
//       console.log("Payment Error:", error);
//     }
//   };





//   return (
//     <div className="checkout-container">
//       <h2>Checkout</h2>
//       <h3>Total Payable: ₹{totalAmount}</h3>

//       <form className="checkout-form">
//         <input name="name" placeholder="Full Name" onChange={handleChange} required />
//         <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
//         <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
//         <textarea name="address" placeholder="Address" onChange={handleChange} required />

//         <button type="button"
//           className="place-order-btn"
//           style={{ background:"black", color:"white", marginTop:"15px" }}
//           onClick={handleStripePayment}>
//           Pay Now with Stripe
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Checkout;



import React from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0;

  const handleStripePayment = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: totalAmount }),
        }
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // ✅ redirect to Stripe
      } else {
        alert("Stripe session failed");
      }
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <h3>Total Payable: ₹{totalAmount}</h3>

      <button
        className="place-order-btn"
        style={{ background: "black", color: "white", marginTop: "20px" }}
        onClick={handleStripePayment}
      >
        Pay with Stripe
      </button>
    </div>
  );
}

export default Checkout;
