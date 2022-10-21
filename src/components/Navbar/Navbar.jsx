import React from "react"
// import Math from "math"
import {useState,useEffect} from "react"
import naruHehe from './assets/NaruHehe.jpeg'
import ConnectWallet from "../../Blockchain/ConnectWallet.jsx"
import Blockchain_utils from "../../Blockchain/blockchain_utils.js"

// import { Blockfrost, Lucid } from "lucid-cardano" // NPM

import './index.css'// our styling 


export function Navbar(props) {
    // change the connect wallet to ada value after state change
    // Wallet.setBlockfrost("testnetcTmGVtySjXnAmkdtwfzgmZIP8p07CDYm")
    const [walletAda,setWalletAda] = useState("Connect Wallet")
    // const [walletIsEnabled,setWalletIsEnabled] = useState()
    let blockchain = props.Blockchain // using to store global state
    let blockchain_utils = new Blockchain_utils() // create utils
    
    
    console.log(`Wallet Check: ${Object.values(props.Blockchain.walletSpecs)}`)
    
    // check if wallet alrdy enable on 
    // if enabled wallet found, will return API call

    async function handleWallet(){
        await ConnectWallet(blockchain) // walllet connector
        setWalletAda((blockchain_utils.lovelace2Ada(blockchain.wallet.adaBalance)).toFixed(2)+ ' ADA')
    }
    //  Wallet.setBlockfrost("testnetcTmGVtySjXnAmkdtwfzgmZIP8p07CDYm")
    return (
        <nav className="navbar">
            <a href="/secret/index.html">
            <button className="hiddenButton"  ><img src={naruHehe} className='logo2' /></button>
            </a>
            <button className='navbar-connectWallet'  onClick={handleWallet}> 
               {walletAda} 
            </button>
        </nav>
    )
}