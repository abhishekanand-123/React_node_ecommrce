import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  // Handle image URL
  const getImageUrl = () => {
    if (!product.image) {
      return 'https://via.placeholder.com/500x400?text=No+Image';
    }
    if (product.image.startsWith('http')) {
      return product.image;
    }
    let imageName = product.image.replace(/^\/+/, '').replace(/^uploads\//, '');
    return `http://localhost:5000/uploads/${imageName}`;
  };

  const addToCart = async () => {
    const res = await fetch("http://localhost:5000/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 1,
        product_id: product.id,
        qty: 1,
      }),
    });

    const data = await res.json();
    alert(data.message);

    // redirect to cart
    navigate("/cart");
  };

  return (
    <div className="product-detail-container">

      <div className="left">
        <img
          src={getImageUrl()}
          alt={product.title}
          className="detail-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/500x400?text=No+Image';
          }}
        />
      </div>

      <div className="right">
        <h2>{product.title}</h2>
        <p className="price">₹ {(parseFloat(product.price) || 0).toFixed(2)}</p>
        <p className="description">{product.description}</p>

        <button className="add-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductDetail;
