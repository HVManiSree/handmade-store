import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBldYee9mTj6O2k11_4kUic2J8ilqZ5GDY",
  authDomain: "handmade-store-af293.firebaseapp.com",
  projectId: "handmade-store-af293",
  storageBucket: "handmade-store-af293.firebasestorage.app",
  messagingSenderId: "104557782279",
  appId: "1:104557782279:web:61e9a6a7949a3228cdd1a2",
  measurementId: "G-G6J0H2ZK54"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);