import { useState, useEffect } from 'react'
import './App.css'// our styling

// NOte for importing Named export (not export default, need to put in {})
import { Navbar } from "./components/Navbar/Navbar.jsx" // importing local module
import { Footer } from "./components/Footer/Footer.jsx" // importing local module
import { Body as Body } from "./components/Body/Body.jsx" // importing local module
import Blockchain from "./Blockchain/Blockchain_data.jsx" //global state of blockchain related function and class
import {Link, Outlet} from "react-router-dom"
import { Dice } from "./components/Dice/Dice.jsx" // importing local module

// making a Component
// similar to function
// need to start with Capital letters
// call using <Component/>
//{JScode}


function App() {
  let blockchain=Blockchain.params
  return (
    <div className="App">
      <Navbar Blockchain={blockchain}/>
      <>
        <Body /> 
    
      </>
      
      <Footer />
    </div>
  )
}

export default App
