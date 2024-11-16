// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbER-MPBXbmBnmgnonTtIevBL86jMT99E",
  authDomain: "clone-yc-25c7d.firebaseapp.com",
  projectId: "clone-yc-25c7d",
  storageBucket: "clone-yc-25c7d.firebasestorage.app",
  messagingSenderId: "663971087045",
  appId: "1:663971087045:web:01ef68421fb9ac268866ac",
  measurementId: "G-1Y56TLDE59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
