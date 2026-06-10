import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo upt.png";
import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="logo-section"
      >
        <img
          src={logo}
          alt="Aarkriti Logo"
          className="logo"
        />

        <h2>Aarkriti</h2>
      </Link>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/custom">Custom Orders</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;