import { useParams } from "react-router-dom";
import { useContext } from "react";

import products from "../data/products";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <img
        src={product.image}
        alt={product.name}
        width="300"
      />

      <h1>{product.name}</h1>

      <h2>₹{product.price}</h2>

      <p>{product.description}</p>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductDetails;