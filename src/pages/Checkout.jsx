import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all fields");
      return;
    }

    const orderItems = cart
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} - ₹${
            item.price * item.quantity
          }`
      )
      .join("%0A");

    const message =
      `Hello Mani,%0A%0A` +
      `New Order%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Address: ${address}%0A%0A` +
      `Items:%0A${orderItems}%0A%0A` +
      `Total: ₹${total}`;

    const whatsappNumber = "7207591419";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h1>Checkout</h1>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
          border: "1px solid #ddd",
        }}
      >
        <h2>Order Summary</h2>

        {cart.map((item) => (
          <p key={item.id}>
            {item.name} x{item.quantity}
            {" - "}₹
            {item.price * item.quantity}
          </p>
        ))}

        <h3>Total: ₹{total}</h3>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #ddd",
        }}
      >
        <h2>Customer Details</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          onClick={handleOrder}
          style={{
            padding: "12px 20px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Place Order on WhatsApp
        </button>
      </div>
    </div>
  );
}

export default Checkout;