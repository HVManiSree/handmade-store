import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState } from "react";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [alertVisible, setAlertVisible] = useState(false);
  const [showMessage, setShowMessage] =
  useState(false);
  
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <h3>{product.name}</h3>

        <p className="price">
          ₹{product.price}
        </p>
      </Link>

      <button
        className="cart-btn"
        onClick={() => {
  addToCart(product);

  setShowMessage(true);

  setTimeout(() => {
    setShowMessage(false);
  }, 2000);
}}
      >
        Add to Cart
      </button>
      {showMessage && (
  <p
    style={{
      color: "green",
      fontWeight: "bold",
      marginTop: "10px",
    }}
  >
    ✓ Added to Cart
  </p>
)}
    </div>
  );
}

export default ProductCard;