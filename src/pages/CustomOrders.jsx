import { useState } from "react";

function CustomOrders() {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = () => {
    const message = `Hello Aarkriti!

Name: ${name}

Product Type: ${product}

Customization Details:
${details}`;

    const whatsappUrl =
      `https://wa.me/917207591419?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "30px",
        background: "white",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h1>Custom Orders</h1>

      <p>
        Have a unique idea? Tell us what you'd like,
        and we'll create something special for you.
      </p>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
        }}
      />

      <input
        type="text"
        placeholder="Product Type (Shirt, Frame, Keychain...)"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
        }}
      />

      <textarea
        placeholder="Describe your customization..."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        rows="6"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          background: "#25d366",
          color: "white",
          border: "none",
          padding: "12px 25px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Send on WhatsApp
      </button>
    </div>
  );
}

export default CustomOrders;