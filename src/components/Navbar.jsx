import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo upt.png";
import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
        }}
      >
        <img
          src={logo}
          alt="Aarkriti Logo"
          style={{
            width: "55px",
            height: "55px",
            objectFit: "contain",
          }}
        />

        <h2
          style={{
            margin: 0,
            color: "#ec81b6",
          }}
        >
          Aarkriti
        </h2>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/custom">Custom Orders</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;