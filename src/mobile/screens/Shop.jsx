import { useState, useContext } from "react";
import products from "../../data/products";
import BottomNavigation from "../components/BottomNavigation";
import { WishlistContext } from "../../context/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/Shop.css";

function Shop() {
    const [search, setSearch] = useState("");
    const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
    const navigate = useNavigate();
    const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);
  return (
  <div className="mobile-shop">

    <h2>Shop</h2>

    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="shop-search"
    />

    <div className="shop-products">

      {filteredProducts.map(product=>(
        <div
  className="shop-card"
  onClick={() => navigate(`/mobile/product/${product.id}`)}
>

          <div className="image-container">

<span
  className="heart"
  onClick={(e) => {
  e.stopPropagation();

  if (isInWishlist(product.id)) {
    toggleWishlist(product);
    toast.info("Removed from Wishlist 💔");
  } else {
    toggleWishlist(product);
    toast.success("Added to Wishlist ❤️");
  }
}}

>
  {isInWishlist(product.id) ? (
    <FaHeart color="#ff4d6d" />
  ) : (
    <FaRegHeart />
  )}
</span>

  {product.video ? (
    <video
      src={product.video}
      autoPlay
      muted
      loop
      playsInline
      className="shop-image"
    />
  ) : (
    <img
      src={product.image}
      alt={product.name}
      className="shop-image"
    />
  )}

</div>

          <div className="shop-info">


<h3>{product.name}</h3>

<p className="rating">
⭐⭐⭐⭐⭐ 4.9
</p>

<p className="price">
₹{product.price}
</p>

<button
  className="cart-button"
  onClick={(e) => {
    e.stopPropagation();

    // Add cart logic here
  }}
>
  🛒 Add to Cart
</button>

          </div>

        </div>
      ))}

    </div>

    <BottomNavigation/>

  </div>
);
}

export default Shop;