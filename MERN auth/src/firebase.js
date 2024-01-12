// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-b182d.firebaseapp.com",
  projectId: "mern-auth-b182d",
  storageBucket: "mern-auth-b182d.appspot.com",
  messagingSenderId: "123334198808",
  appId: "1:123334198808:web:4fc4d5b8b8bf05f299256d",
  measurementId: "G-PB4M9ECPM3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);