import { initializeApp } from "firebase/app";
export default class FirebaseConfig {
  static options={
    apiKey: "AIzaSyA7j4WPg7eYjorWVD5ZadhzJ4fMKyLNUcw",
    authDomain: "hellop-40d49.firebaseapp.com",
    databaseURL: "https://hellop-40d49-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hellop-40d49",
    storageBucket: "hellop-40d49.appspot.com",
    messagingSenderId: "788968164566",
    appId: "1:788968164566:web:527f8a867627f98aae8d77",
    measurementId: "G-8FK94EBEW3"
  }
  static initApp =()=>{ return initializeApp(this.options)}
};