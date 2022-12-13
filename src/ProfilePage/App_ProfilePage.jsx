import { useState, useEffect } from 'react'
import './index.css'
import { useForm } from 'react-hook-form';
import {
  useLocation ,
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'

import Blockchain from "../Blockchain/Blockchain_data.jsx" //global state of blockchain related function and class
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set  } from "firebase/database";
import FirebaseConfig from "../FirebaseConfig.js"

export default function App_ProfilePage() {
  let blockchain = Blockchain.params
  let firebaseConfig = FirebaseConfig.options
    // useEffect(
    //   ()=>{
    //     console.log(window.location.pathname)
    //   }
    // )
    // const firebaseConfig = {
    //   apiKey: "AIzaSyA7j4WPg7eYjorWVD5ZadhzJ4fMKyLNUcw",
    //   authDomain: "hellop-40d49.firebaseapp.com",
    //   databaseURL: "https://hellop-40d49-default-rtdb.asia-southeast1.firebasedatabase.app",
    //   projectId: "hellop-40d49",
    //   storageBucket: "hellop-40d49.appspot.com",
    //   messagingSenderId: "788968164566",
    //   appId: "1:788968164566:web:527f8a867627f98aae8d77",
    //   measurementId: "G-8FK94EBEW3"
    // };
    
  // Initialize Firebase
  console.log(`init app@!@#@#`)
  // const app = initializeApp(firebaseConfig);
  const app = FirebaseConfig.initApp()
  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    console.log(blockchain)
    set(ref(database, 'users/'+blockchain.txParams.changeAddr ), {
      addr: blockchain.txParams.changeAddr,
      email: data.Email,
    
    });
  }
  console.log(errors);
  console.log(blockchain);
  // return (
  //   <div className="App_ProfilePage">
  //     <input/>
  //   </div>
  // )
  return (
      <div className="App_ProfilePage">
        <div className='profilePageInstruction'>Save Your email to allow the app to send an alert when the NFT is on the market!</div>
        <form onSubmit={handleSubmit(onSubmit)} className='profilePageForm'>
          <input type="text" className='profilePageTextInput' placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
          <input type="submit" className='profilePageSubmit'/>
        </form>
      </div>
    )
  }
  
