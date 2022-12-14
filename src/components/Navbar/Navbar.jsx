import React from "react"
// import Math from "math"
import {useState,useEffect} from "react"
import naruHehe from './assets/NaruHehe.jpeg'
import ConnectWallet from "../../Blockchain/ConnectWallet.jsx"
import Blockchain_utils from "../../Blockchain/blockchain_utils.js"
import DB_utils from "../../db/db_utils.js"
// import { Blockfrost, Lucid } from "lucid-cardano" // NPM

import './index.css'// our styling 

// init the database functions
const db_utils = new DB_utils()

export function Navbar(props) {
    // change the connect wallet to ada value after state change
    // Wallet.setBlockfrost("testnetcTmGVtySjXnAmkdtwfzgmZIP8p07CDYm")
    const [walletAda,setWalletAda] = useState("Connect Wallet")
    let blockchain = props.Blockchain // using to store global state
    let blockchain_utils = new Blockchain_utils() // create utils
    let isInitialLoad=true // let the page detect the initial load/render
    useEffect(  ()=>{if (isInitialLoad) {
        async function initialWalletLoad() {await connectEnabledWallet() }
        initialWalletLoad()
        console.log(`1st render`)
        isInitialLoad=false
        }}
    ,[isInitialLoad])
    console.log(`Wallet Check: ${Object.values(props.Blockchain.walletSpecs)}`)

    // check if wallet alrdy enabled
    // if enabled wallet found, will update with all walletSpecs 
    // set adaBalance state
    async function connectEnabledWallet  (){
        let enabledWallet = await blockchain_utils.checkEnable()
        if ( enabledWallet !== null ){
            console.log(`enabledWalletOn1stRender: ${Object.keys(enabledWallet)}`)
            try{
                await ConnectWallet(blockchain)
                console.log(`acct addr: ${blockchain.wallet.rewardAddr}`)
                db_utils.createNewAcct(blockchain.wallet.rewardAddr)
                setWalletAda((blockchain_utils.lovelace2Ada(blockchain.wallet.adaBalance)).toFixed(2)+ ' ADA')
            }
            catch(error){ console.log(error)}
        }else console.log(`No Wallet enabled on initial render`)
    }
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