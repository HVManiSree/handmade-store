import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>✨ Handmade By Mani ✨</h1>

      <p>
        Hand-Painted Shirts, Tote Bags,
        Photo Frames & Personalized Gifts
      </p>

      <Link to="/shop">
        <button className="shop-btn">
          Shop Now
        </button>
      </Link>

      <div className="features">
        <div>🎨 Handcrafted Designs</div>
        <div>💝 Personalized Gifts</div>
        <div>🚚 Pan India Delivery</div>
      </div>
    </div>
  );
}

export default Home;