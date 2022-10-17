// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7j4WPg7eYjorWVD5ZadhzJ4fMKyLNUcw",
  authDomain: "hellop-40d49.firebaseapp.com",
  projectId: "hellop-40d49",
  storageBucket: "hellop-40d49.appspot.com",
  messagingSenderId: "788968164566",
  appId: "1:788968164566:web:527f8a867627f98aae8d77",
  measurementId: "G-8FK94EBEW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);