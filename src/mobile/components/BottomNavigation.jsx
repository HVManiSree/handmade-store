import {
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaUser,
  FaHeart,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import "../styles/BottomNavigation.css";

function BottomNavigation() {
  return (
    <div className="bottom-nav">

      <NavLink
        to="/mobile/home"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <FaHome />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/mobile/shop"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <FaShoppingBag />
        <span>Shop</span>
      </NavLink>

      <NavLink
  to="/mobile/wishlist"
  className={({ isActive }) =>
    isActive ? "nav-item active" : "nav-item"
  }
>
  <FaHeart />
  <span>Wishlist</span>
</NavLink>

      <NavLink
        to="/mobile/cart"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <FaShoppingCart />
        <span>Cart</span>
      </NavLink>

      <NavLink
        to="/mobile/profile"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <FaUser />
        <span>Profile</span>
      </NavLink>

    </div>
  );
}

export default BottomNavigation;