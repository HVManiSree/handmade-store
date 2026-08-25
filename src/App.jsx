import { Capacitor } from "@capacitor/core";
import { Navigate } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import CustomOrders from "./pages/CustomOrders";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";


function Layout() {
  const location = useLocation();

  const isCapacitor = Capacitor.isNativePlatform();
  
  console.log("Capacitor:", isCapacitor);
  console.log("Path:", location.pathname);

  const isMobileApp =
    location.pathname.startsWith("/mobile") || isCapacitor;

  console.log("Is Mobile App:", isMobileApp);

 return (
  <>
    {!isMobileApp && <Navbar />}

    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/custom" element={<CustomOrders />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/admin" element={<Admin />} />  </Routes>
      

    {!isMobileApp && <Footer />}
    {!isMobileApp && <WhatsAppButton />}
  </>
);
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;