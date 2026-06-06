import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              marginBottom: "10px",
              padding: "10px"
            }}
          >
            <h2>Total: ₹{total}</h2>

<button
  onClick={() => navigate("/checkout")}
>
  Proceed To Checkout
</button>  

            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;