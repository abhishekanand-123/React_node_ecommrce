// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// // Website Pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Checkout from "./pages/Checkout";
// import ThankYou from "./pages/ThankYou";


// // Ecommerce Pages
// import ProductList from "./components/ProductList";
// import ProductDetail from "./pages/ProductDetail";

// import CartPage from "./pages/CartPage";
// import ViewProducts from "./pages/ViewProducts";
// import OrderPage from "./pages/OrderPage";


// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Header />

//       <main className="content">
//         <Routes>
//           {/* Website Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/thank-you" element={<ThankYou />} />


//           {/* Ecommerce Routes */}
//           <Route path="/products" element={<ProductList />} />
//          <Route path="/product/:id" element={<ProductDetail />} />
//          <Route path="/view-products" element={<ViewProducts />} />

//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/orders" element={<OrderPage />} />

//         </Routes>
//       </main>

//       <Footer />
//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* WEBSITE */
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";

import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import ViewProducts from "./pages/ViewProducts";
import OrderPage from "./pages/OrderPage";

/* ADMIN */
import AdminRoutes from "./admin/AdminRoutes";

function App() {
  return (
    <Router>
      <Routes>

        {/* 🌐 WEBSITE ROUTES */}
        <Route
          path="/*"
          element={
            <div className="site-wrapper">
              <Header />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="services" element={<Services />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="thank-you" element={<ThankYou />} />

                  <Route path="products" element={<ProductList />} />
                  <Route path="product/:id" element={<ProductDetail />} />
                  <Route path="view-products" element={<ViewProducts />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="orders" element={<OrderPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />

        {/* 🛠 ADMIN ROUTES */}
        <Route path="/admin/*" element={<AdminRoutes />} />

      </Routes>
    </Router>
  );
}

export default App;
