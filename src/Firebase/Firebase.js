// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA98OFQ1MOnBG_17aVaBbRSwIC2rzUaPS0",
  authDomain: "task-management-applicat-22c00.firebaseapp.com",
  projectId: "task-management-applicat-22c00",
  storageBucket: "task-management-applicat-22c00.firebasestorage.app",
  messagingSenderId: "1033857241216",
  appId: "1:1033857241216:web:48ec3a88f12b9c92211665",
  measurementId: "G-K5CJ328E7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
