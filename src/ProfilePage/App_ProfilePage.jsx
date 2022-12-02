import { useState, useEffect } from 'react'
import './index.css'
import { useForm } from 'react-hook-form';
import {
  useLocation ,
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'
import Test from "./Test.jsx"
import App_sp from "./../secret/App_sp.jsx"

export default function App_ProfilePage() {
  
    // useEffect(
    //   ()=>{
    //     console.log(window.location.pathname)
    //   }
    // )

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
      <div className="App_ProfilePage">
        <form onSubmit={handleSubmit(onSubmit)} className='profilePageForm'>
          <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
          <input type="submit" />
        </form>
      </div>
    )
  }
  
