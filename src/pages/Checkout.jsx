import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <h2>Order Summary</h2>

      {cart.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}

      <h3>Total: ₹{total}</h3>

      <hr />

      <input
        type="text"
        placeholder="Full Name"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Phone Number"
      />

      <br /><br />

      <textarea
        placeholder="Delivery Address"
      />

      <br /><br />

      <button>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;