import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <h3>{product.name}</h3>
      </Link>

      <p>{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;