import { useParams } from "react-router-dom";
import { useContext, useState } from "react";

import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

import qrImage from "../assets/qr.jpeg";

function ProductDetails() {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const [showQR, setShowQR] = useState(false);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  const whatsappNumber = "917207591419";

  const paymentMessage =
    `Hello Aarkriti! 🌸%0A%0A` +
    `I have completed payment for:%0A%0A` +
    `Product: ${product.name}%0A` +
    `Price: ₹${product.price}%0A%0A` +
    `Please find my payment screenshot attached.%0A%0AThank you!`;

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "800px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "300px",
          borderRadius: "12px",
        }}
      />

      <h1>{product.name}</h1>

      <h2>₹{product.price}</h2>

      <p>{product.description}</p>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "12px 20px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        Add To Cart
      </button>

      <button
        onClick={() => setShowQR(true)}
        style={{
          padding: "12px 20px",
          cursor: "pointer",
          background: "#b76034",
          color: "white",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Buy Now
      </button>

      {showQR && (
        <div
          style={{
            marginTop: "30px",
            padding: "25px",
            border: "1px solid #ddd",
            borderRadius: "15px",
            background: "#fffaf7",
          }}
        >
          <h2>Scan QR Code to Pay</h2>

          <img
            src={qrImage}
            alt="Payment QR"
            style={{
              width: "250px",
              borderRadius: "12px",
            }}
          />

          <p
            style={{
              marginTop: "15px",
              fontWeight: "bold",
            }}
          >
            Complete the payment and then send
            the payment screenshot on WhatsApp.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${paymentMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                marginTop: "15px",
                padding: "12px 25px",
                background: "#25d366",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              I've Paid
            </button>
          </a>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;