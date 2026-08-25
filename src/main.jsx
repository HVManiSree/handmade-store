import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { WishlistProvider } from "./context/WishlistContext";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <ProductProvider>
  <CartProvider>
    <WishlistProvider>
      <App />
  <ToastContainer
    position="bottom-center"
    autoClose={1800}
    hideProgressBar
    theme="light"
  />
    </WishlistProvider>
  </CartProvider>
</ProductProvider>
);