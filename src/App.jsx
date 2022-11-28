import { useState, useEffect } from 'react'
import './App.css'// our styling
import {
  Routes,
  Route} from 'react-router-dom'
// NOte for importing Named export (not export default, need to put in {})
import Home from './Home.jsx'
import Secret from './secret/App_sp.jsx'
import Blockchain from "./Blockchain/Blockchain_data.jsx" //global state of blockchain related function and class

// making a Component
// similar to function
// need to start with Capital letters
// call using <Component/>
//{JScode}


function App() {
  let blockchain=Blockchain.params
  return (
    <Routes className="App">
      <Route path="/" element={<Home blockchain={blockchain}/>} />
      <Route path="/secret" element={<Secret blockchain={blockchain}/>} />
    </Routes>
  )
}

export default App
