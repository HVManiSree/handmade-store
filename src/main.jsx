import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { CartProvider }
from "./context/CartContext";

import { ProductProvider }
from "./context/ProductContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>
);