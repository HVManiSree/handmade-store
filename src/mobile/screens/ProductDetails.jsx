import { useParams } from "react-router-dom";
import products from "../../data/products";
import BottomNavigation from "../components/BottomNavigation";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">

      {product.video ? (
        <video
          src={product.video}
          controls
          className="details-image"
        />
      ) : (
        <img
          src={product.image}
          alt={product.name}
          className="details-image"
        />
      )}

      <div className="details-info">

        <h2>{product.name}</h2>

        <p className="details-rating">
          ⭐⭐⭐⭐⭐ 4.9
        </p>

        <h3>₹{product.price}</h3>

        <p className="description">
          {product.description}
        </p>

        <button className="cart-btn">
          🛒 Add to Cart
        </button>

        <button className="buy-btn">
          ⚡ Buy Now
        </button>

      </div>

      <BottomNavigation />

    </div>
  );
}

export default ProductDetails;