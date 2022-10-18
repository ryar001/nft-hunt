import React from "react"
import reactLogo from './assets/react.svg'
import naruHehe from './assets/NaruHehe.jpeg'
import ConnectWallet from "./ConnectWallet.jsx"
// import { Blockfrost, Lucid } from "lucid-cardano" // NPM

import './index.css'// our styling 
// function handleWallet(){

// }

export function Navbar() {

    return (
        <nav className="navbar">
            <a href="/secret/index.html">
            <button className="hiddenButton"  ><img src={naruHehe} className='logo2' /></button>
            </a>
            <button className='navbar-connectWallet' onClick={ConnectWallet}> 
                Connect Wallet
            </button>
        </nav>
    )
}