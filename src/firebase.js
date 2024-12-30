import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt9dbuM2vekZrgGkGztdmLLGrvAkxGxeA",
  authDomain: "aman-personal-portfolio.firebaseapp.com",
  projectId: "aman-personal-portfolio",
  storageBucket: "aman-personal-portfolio.firebasestorage.app",
  messagingSenderId: "556811133408",
  appId: "1:556811133408:web:650264c39ee3383c8a8b85",
  measurementId: "G-27C3PJ9E2K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();