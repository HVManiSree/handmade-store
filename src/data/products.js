import shirt from "../assets/shirt.jpg";
import frame from "../assets/frame.jpg";
import keychain from "../assets/keychain.jpg";
import slate from "../assets/slate.png";

const products = [
  {
    id: 1,
    name: "Hand Painted Shirt",
    price: 799,
    image: shirt,
    description:
      "Unique hand-painted cotton shirt made with fabric colors.",
    category: "shirt",
    instagram: "https://www.instagram.com/p/DLfioj1SXl5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 3,
    name: "Photo Frame",
    price: 699,
    image: frame,
    description: "Mini customized photo frame.",
    category: "frame",
    instagram : "https://www.instagram.com/p/DK2T-dgS5_h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 4,
    name: "Key Chain",
    price: 199,
    image: keychain,
    description: "Handmade keychains made with mouldit clay.",
    category: "keychain",
    instagram : "https://www.instagram.com/reel/DNwAVFO5ixX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="

  },
    {
      id: 5,
      name: "Customized Slate",
      price: 599,
      image: slate,
     description: "Hand-painted customized slate for Aksharabhyasam ceremonies.",
  category: "slate",
  instagram : "https://www.instagram.com/p/DYR8qZUCb-q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
},
];

export default products;