import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import BottomNavigation from "../components/BottomNavigation";
import "../styles/Wishlist.css";

function Wishlist() {
  const { wishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  return (
    <div className="wishlist-page">

      <h2 className="wishlist-title">My Favorites ❤️</h2>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <h3>Your wishlist is empty</h3>
          <p>Save your favourite handmade creations here.</p>
        </div>
      ) : (
        <div className="wishlist-products">

          {wishlist.map((product) => (
            <div
              className="wishlist-card"
              key={product.id}
              onClick={() =>
                navigate(`/mobile/product/${product.id}`)
              }
            >
              {product.video ? (
                <video
                  src={product.video}
                  className="wishlist-image"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={product.image}
                  alt={product.name}
                  className="wishlist-image"
                />
              )}

              <div className="wishlist-info">

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
                    // Cart logic later
                  }}
                >
                  🛒 Add to Cart
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

      <BottomNavigation />

    </div>
  );
}

export default Wishlist;