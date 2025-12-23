import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">MyWebsite</div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>

        {/* 🛒 New Shop Link */}
        <Link to="/products">Shop</Link>

        {/* Optional: Cart Link */}
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
