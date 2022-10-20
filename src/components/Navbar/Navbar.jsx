import React from "react"
// import Math from "math"
import {useState,useEffect} from "react"
import naruHehe from './assets/NaruHehe.jpeg'
import ConnectWallet from "../../Blockchain/ConnectWallet.jsx"
import blockchain_utils from "../../Blockchain/blockchain_utils.js"

// import { Blockfrost, Lucid } from "lucid-cardano" // NPM

import './index.css'// our styling 


export function Navbar(props) {
    // change the connect wallet to ada value after state change
    // Wallet.setBlockfrost("testnetcTmGVtySjXnAmkdtwfzgmZIP8p07CDYm")

    const [walletAda,setWalletAda] = useState("Connect Wallet")
    // const [walletIsEnabled,setWalletIsEnabled] = useState()
    let blockchain = props.Blockchain
    let Blockchain_utils=new blockchain_utils() // create utils
    console.log(`Wallet Check: ${Object.values(props.Blockchain.walletSpecs)}`)
    async function handleWallet(){
        await ConnectWallet(blockchain) // walllet connector

        setWalletAda((Blockchain_utils.lovelace2Ada(blockchain.wallet.adaBalance)).toFixed(2)+ ' ADA')
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