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
  addDoc,
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
  
  const [reviewName, setReviewName] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewText, setReviewText] = useState(""); 

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
    `I want this product.%0A` +
    `Please send the qr for payment.%0A%0A` +
    `Thank you!`;
  
    const submitReview = async () => {
  try {
    await addDoc(
      collection(db, "review"),
      {
        productId: Number(id),
        name: reviewName,
        rating: Number(reviewRating),
        review: reviewText,
        approved: false,
      }
    );

    alert(
      "Thank you! Your review has been sent for approval."
    );

    setReviewName("");
    setReviewRating(5);
    setReviewText("");
  } catch (error) {
    console.log(error);
  }
}; 
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

     {product.instagram && (
  <a
    href={product.instagram}
    target="_blank"
    rel="noreferrer"
  >
    <button
      style={{
        background: "#aa5a2f",
        color: "white",
        border: "none",
        padding: "12px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        marginBottom: "20px",
      }}
    >
      📸 View on Instagram
    </button>
  </a>
)}

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

          <p
            style={{
              marginTop: "15px",
              fontWeight: "bold",
            }}
          > </p>

          <p>
            Enter the above details and click the button below
            for ordering via whatsapp  </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${paymentMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                marginTop: "15px",
                padding: "12px 25px",
                background: "#4bac6e",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Order now on whatsapp 
            </button>
          </a>
        </div>
      )}

      {/* REVIEWS SECTION */}
    <h2>Customer Reviews ⭐</h2>
      <div
        style={{
          marginTop: "50px",
          textAlign: "left",
        }}
      >
        <h2>Customer Reviews ⭐</h2>
        <div
  style={{
    background: "#fffaf7",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "30px",
  }}
>
  <h3>Write a Review</h3>

  <input
    type="text"
    placeholder="Your Name"
    value={reviewName}
    onChange={(e) =>
      setReviewName(e.target.value)
    }
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      boxSizing: "border-box",
    }}
  />

  <select
    value={reviewRating}
    onChange={(e) =>
      setReviewRating(e.target.value)
    }
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
    }}
  >
    <option value="5">⭐⭐⭐⭐⭐</option>
    <option value="4">⭐⭐⭐⭐</option>
    <option value="3">⭐⭐⭐</option>
    <option value="2">⭐⭐</option>
    <option value="1">⭐</option>
  </select>

  <textarea
    placeholder="Write your review..."
    value={reviewText}
    onChange={(e) =>
      setReviewText(e.target.value)
    }
    rows="4"
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      boxSizing: "border-box",
    }}
  />

  <button
    onClick={submitReview}
    style={{
      background: "#b76034",
      color: "white",
      border: "none",
      padding: "12px 20px",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    Submit Review
  </button>
</div>

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