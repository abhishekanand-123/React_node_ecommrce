import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  // Handle image path - database stores just filename
  const getImageUrl = () => {
    if (!product.image) {
      return 'https://via.placeholder.com/300x220?text=No+Image';
    }
    
    // If already a full URL (http/https)
    if (product.image.startsWith('http')) {
      return product.image;
    }
    
    // Remove any leading slashes and 'uploads/' if present to normalize
    let imageName = product.image.replace(/^\/+/, '').replace(/^uploads\//, '');
    
    // Build the full URL
    return `http://localhost:5000/uploads/${imageName}`;
  };

  return (
    <div className="product-card">
      {/* Clickable Image */}
      <Link to={`/product/${product.id}`} className="product-img-link">
        <img
          src={getImageUrl()}
          alt={product.title}
          className="product-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x220?text=No+Image';
          }}
        />
      </Link>
      
      <h3>{product.title}</h3>
      <p>₹ {(parseFloat(product.price) || 0).toFixed(2)}</p>

      <div className="product-actions">
        <Link to={`/product/${product.id}`} className="btn details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
