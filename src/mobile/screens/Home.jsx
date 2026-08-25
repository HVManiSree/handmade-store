import "../styles/Home.css";
import {
  FaTshirt,
  FaGift,
  FaShoppingBag,
  FaKey,
} from "react-icons/fa";

import {
  MdPhoto,
  MdOutlineKitchen,
} from "react-icons/md";
import products from "../../data/products";
import BottomNavigation from "../components/BottomNavigation";


function Home() {
  return (
    <div className="mobile-home">

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search handmade gifts..."
          className="search-bar"
        />
      </div>

      {/* Welcome Banner */}
      <div className="banner">
        <h2>Welcome to Aarkriti </h2>
        <p>Handmade • Customized • Crafted with Love</p>
      </div>
      <h3 className="section-title">Categories</h3>

<div className="categories">

  <div className="category">
    <FaTshirt className="category-icon" />
    <span>Shirts</span>
  </div>

  <div className="category">
    <MdPhoto className="category-icon" />
    <span>Frames</span>
  </div>

  <div className="category">
    <FaKey className="category-icon" />
    <span>Keychains</span>
  </div>

  <div className="category">
    <FaGift className="category-icon" />
    <span>Magnets</span>
  </div>

  <div className="category">
    <FaShoppingBag className="category-icon" />
    <span>Pouches</span>
  </div>

  <div className="category">
    <FaGift className="category-icon" />
    <span>Crafts</span>
  </div>

</div>
<h3 className="section-title">✨ Featured Products</h3>

<div className="featured-products">
  {products.slice(0, 6).map((product) => (
    <div className="featured-card" key={product.id}>
      {product.video ? (
        <video
          src={product.video}
          autoPlay
          muted
          loop
          playsInline
          className="featured-image"
        />
      ) : (
        <img
          src={product.image}
          alt={product.name}
          className="featured-image"
        />
      )}

      <h4>{product.name}</h4>

      <p>₹{product.price}</p>
    </div>
  ))}
</div>
<BottomNavigation />
</div>

  );
}

export default Home;