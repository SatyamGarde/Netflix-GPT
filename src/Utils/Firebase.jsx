// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArZph9FXEnsOJGGW0SZ6pODEFIWhsmBnE",
  authDomain: "netflix-d9b78.firebaseapp.com",
  projectId: "netflix-d9b78",
  storageBucket: "netflix-d9b78.appspot.com",
  messagingSenderId: "908002231128",
  appId: "1:908002231128:web:76cced40731db5df019b2d",
  measurementId: "G-S1WYT6KEMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();