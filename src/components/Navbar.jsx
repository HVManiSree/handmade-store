import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2>Handmade By Mani</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/custom">
          Custom Orders
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;