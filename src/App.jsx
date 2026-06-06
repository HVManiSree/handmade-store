import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import CustomOrders from "./pages/CustomOrders";
import ProductDetails from "./pages/ProductDetails";  

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom" element={<CustomOrders />} />
        <Route path="/product/:id" element={<ProductDetails />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;