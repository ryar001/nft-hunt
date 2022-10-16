import React from "react"
import reactLogo from './assets/react.svg'
import naruHehe from './assets/NaruHehe.jpeg'
// import { Blockfrost, Lucid } from "lucid-cardano" // NPM

import './index.css'// our styling 

export function Navbar() {

    return (
        <nav className="navbar">
            <img src={naruHehe} className='logo2' />
            <button className='navbar-connectWallet'> 
                Connect Wallet
            </button>
        </nav>
    )
}