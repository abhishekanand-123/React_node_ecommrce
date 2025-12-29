import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero-section" style={{ backgroundImage: "url('/Banner.jpg')" }}>
        <div className="hero-content">
          <p className="sub-title">WELCOME TO OUR STORE</p>
          <h1>MyWebsite</h1>
          <p className="tagline">QUALITY PRODUCTS • BEST PRICES • FAST DELIVERY</p>
          <p className="desc">Discover our amazing collection of products crafted with care and quality.</p>
          <Link to="/products" className="shop-btn">Shop Now</Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="feature-card">
          <i className="feature-icon">🚚</i>
          <h3>Free Shipping</h3>
          <p>On orders over ₹500</p>
        </div>
        <div className="feature-card">
          <i className="feature-icon">🔄</i>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
        <div className="feature-card">
          <i className="feature-icon">🔒</i>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
        <div className="feature-card">
          <i className="feature-icon">💬</i>
          <h3>24/7 Support</h3>
          <p>Dedicated support team</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>

        <div className="testimonial-list">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <img src={item.image} alt="Client" />
              <p>"{item.message}"</p>
              <h4>- {item.name}</h4>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
