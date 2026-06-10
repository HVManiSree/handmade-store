import { useParams } from "react-router-dom";
import {
  useContext,
  useState,
  useEffect,
} from "react";

import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

import { db } from "../firebase";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import qrImage from "../assets/qr.jpeg";

function ProductDetails() {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const [showQR, setShowQR] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const [reviews, setReviews] = useState([]);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "review")
        );

        const reviewsData = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();

          if (
            data.productId === Number(id) &&
            data.approved === true
          ) {
            reviewsData.push(data);
          }
        });

        setReviews(reviewsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [id]);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  const whatsappNumber = "917207591419";

  const whatsappOrderMessage =
    `Hello Aarkriti! 🌸%0A%0A` +
    `I would like to order:%0A%0A` +
    `${product.name}%0A` +
    `Price: ₹${product.price}`;

  const paymentMessage =
    `Hello Aarkriti! 🌸%0A%0A` +
    `Name: ${customerName}%0A` +
    `Phone: ${customerPhone}%0A` +
    `Email: ${customerEmail}%0A%0A` +
    `Product: ${product.name}%0A` +
    `Price: ₹${product.price}%0A%0A` +
    `I have completed payment.%0A` +
    `Please find my payment screenshot attached.%0A%0A` +
    `Thank you!`;

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

      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappOrderMessage}`}
        target="_blank"
        rel="noreferrer"
      >
        <button
          style={{
            padding: "12px 20px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Order on WhatsApp
        </button>
      </a>

      <button
        onClick={() => setShowQR(true)}
        style={{
          padding: "12px 20px",
          background: "#b76034",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
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
          <h2>Complete Your Payment</h2>

          <input
            type="text"
            placeholder="Your Name"
            value={customerName}
            onChange={(e) =>
              setCustomerName(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "10px",
              boxSizing: "border-box",
            }}
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={customerPhone}
            onChange={(e) =>
              setCustomerPhone(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "10px",
              boxSizing: "border-box",
            }}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={customerEmail}
            onChange={(e) =>
              setCustomerEmail(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              boxSizing: "border-box",
            }}
          />

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
            Scan the QR code and complete your payment.
          </p>

          <p>
            After payment, click the button below
            and send your payment screenshot on
            WhatsApp.
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

      {/* REVIEWS SECTION */}

      <div
        style={{
          marginTop: "50px",
          textAlign: "left",
        }}
      >
        <h2>Customer Reviews ⭐</h2>

        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              style={{
                background: "white",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <h4>{review.name}</h4>

              <p>
                {"⭐".repeat(
                  Number(review.rating)
                )}
              </p>

              <p>{review.review}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductDetails;