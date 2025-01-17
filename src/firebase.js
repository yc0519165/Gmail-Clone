// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBZeB5za5_FguVN99Hhmm53MFvlGKUXoBw",
//   authDomain: "clone-1c5a8.firebaseapp.com",
//   projectId: "clone-1c5a8",
//   storageBucket: "clone-1c5a8.firebasestorage.app",
//   messagingSenderId: "525399602936",
//   appId: "1:525399602936:web:b83d33e58c8cac710d6d0d",
// };

// // Initialize Firebase

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth();
// export const db = getFirestore(app);
// export const provider = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfmnDjE3LUEd6YrnJ3OfCBzVb1cgYizec",
  authDomain: "for-e38fa.firebaseapp.com",
  projectId: "for-e38fa",
  storageBucket: "for-e38fa.firebasestorage.app",
  messagingSenderId: "906105984091",
  appId: "1:906105984091:web:a626df9dd244135c00db7e",
  measurementId: "G-NFF0SYE3KM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
