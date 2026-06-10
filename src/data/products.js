import shirt from "../assets/shirt.jpg";
import frame from "../assets/frame.jpg";
import keychain from "../assets/keychain.jpg";

const products = [
  {
    id: 1,
    name: "Hand Painted Shirt",
    price: 799,
    image: shirt,
    description:
      "Unique hand-painted cotton shirt made with fabric colors.",
    category: "shirt",
  },
  {
    id: 2,
    name: "Photo Frame",
    price: 699,
    image: frame,
    description: "Mini customized photo frame.",
    category: "frame",
  },
  {
    id: 3,
    name: "Key Chain",
    price: 199,
    image: keychain,
    description: "Handmade keychains made with mouldit clay.",
    category: "keychain",
  },
];

export default products;