// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSpwgMvEDZT-ea7A1Zml1tLBAbPvEaFOQ",
  authDomain: "organic-ts.firebaseapp.com",
  projectId: "organic-ts",
  storageBucket: "organic-ts.appspot.com",
  messagingSenderId: "197079085874",
  appId: "1:197079085874:web:e121233dea38b60ce25d2b",
  measurementId: "G-P97R31R552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)