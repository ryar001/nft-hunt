import React from "react"
import {useState} from "react"
import reactLogo from './assets/react.svg'
import naruHehe from './assets/NaruHehe.jpeg'
import ConnectWallet from "../../Blockchain/ConnectWallet.jsx"
// import { Blockfrost, Lucid } from "lucid-cardano" // NPM

import './index.css'// our styling 


export function Navbar(props) {
    let blockchain=props.Blockchain
    console.log(`Blcakcoc${blockchain.walletSpecs}`)
    function handleWallet(){
        ConnectWallet(blockchain)
    }
    //  Wallet.setBlockfrost("testnetcTmGVtySjXnAmkdtwfzgmZIP8p07CDYm")
    return (
        <nav className="navbar">
            <a href="/secret/index.html">
            <button className="hiddenButton"  ><img src={naruHehe} className='logo2' /></button>
            </a>
            <button className='navbar-connectWallet' onClick={handleWallet } > 
                Connect Wallet
            </button>
        </nav>
    )
}