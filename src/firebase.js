// import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  // collection, getDocs
} from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6FhSa7ttBqi3Fl_FrID-m2SuWTHi_9aI",
  authDomain: "amaznshop-ca5a6.firebaseapp.com",
  projectId: "amaznshop-ca5a6",
  storageBucket: "amaznshop-ca5a6.appspot.com",
  messagingSenderId: "546147366455",
  appId: "1:546147366455:web:8d093aae334685a6dab1b2",
  measurementId: "G-HEV8VNHQCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };
