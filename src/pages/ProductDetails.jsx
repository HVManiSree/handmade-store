import { useParams } from "react-router-dom";
import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  const whatsappNumber = "7207591419";

  const whatsappMessage =
    `Hello Mani,%0A%0A` +
    `I would like to order:%0A%0A` +
    `${product.name}%0A` +
    `Price: ₹${product.price}`;

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
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
      >
        <button
          style={{
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          Order on WhatsApp
        </button>
      </a>
    </div>
  );
}

export default ProductDetails;