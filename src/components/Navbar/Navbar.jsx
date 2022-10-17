import React from "react"
import reactLogo from './assets/react.svg'
import naruHehe from './assets/NaruHehe.jpeg'
// import { Blockfrost, Lucid } from "lucid-cardano" // NPM

import './index.css'// our styling 
function handleClick(){
    return (<a href= "/secret"></a>)
}

export function Navbar() {

    return (
        <nav className="navbar">
            <a href="/secret">
            <button className="hiddenButton"  ><img src={naruHehe} className='logo2' /></button>
            </a>
            <button className='navbar-connectWallet'> 
                Connect Wallet
            </button>
        </nav>
    )
}