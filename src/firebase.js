import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "handmade-store-af293.firebaseapp.com",
  projectId: "handmade-store-af293",
  storageBucket: "handmade-store-af293.firebasestorage.app",
  messagingSenderId: "104557782279",
  appId: "1:104557782279:web:d2ff48ba6de8ded8cdd1a2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);