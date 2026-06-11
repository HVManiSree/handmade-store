import shirt from "../assets/shirt.jpg";
import frame from "../assets/frame.jpg";
import keychain from "../assets/keychain.jpg";
import slate from "../assets/slate.jpg";

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
    id: 3,
    name: "Photo Frame",
    price: 699,
    image: frame,
    description: "Mini customized photo frame.",
    category: "frame",
  },
  {
    id: 4,
    name: "Key Chain",
    price: 199,
    image: keychain,
    description: "Handmade keychains made with mouldit clay.",
    category: "keychain",
  },
    {
      id: 5,
      name: "Customized Slate",
      price: 599,
      image: slate,
     description: "Hand-painted customized slate for Aksharabhyasam ceremonies.",
  category: "slate",
},
];

export default products;