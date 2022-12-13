import React from "react"
// import Math from "math"
import {useState,useEffect} from "react"
import { useNavigate,redirect } from "react-router-dom";
import {
    BrowserRouter as Router,
    Link,
    Outlet
  } from "react-router-dom";
import naruHehe from './assets/NaruHehe.jpeg'
import ConnectWallet from "../../Blockchain/ConnectWallet.jsx"
import Blockchain_utils from "../../Blockchain/blockchain_utils.js"
import ProfilePage from "./../../ProfilePage/App_ProfilePage.jsx"


// import { Blockfrost, Lucid } from "lucid-cardano" // NPM

import './index.css'// our styling 


export function Navbar(props) {


    // function routeChange(){ 
    //   let path = "/secret/index.html"; 
    //   useNavigate(path);
    // } 
    // change the connect wallet to ada value after state change
    // Wallet.setBlockfrost("testnetcTmGVtySjXnAmkdtwfzgmZIP8p07CDYm")
    const [walletAda,setWalletAda] = useState("Connect Wallet")
    const [walletConnected,setWalletConnected] = useState(false)
    const [currentPathname,setCurrentPathname]=useState("/")
    // const [isInitialLoad,setInitialLoad]=useState(true)
    // const [walletIsEnabled,setWalletIsEnabled] = useState()
    let blockchain = props.Blockchain // using to store global state
    let blockchain_utils = new Blockchain_utils() // create utils
    // setInitialLoad(true)
    let isInitialLoad=true
    useEffect(  ()=>{if (isInitialLoad) {
        console.log(`1st render`)
        async function initialWalletLoad() {await connectEnabledWallet() }
        initialWalletLoad()
        isInitialLoad=false

        }
       
    }
    ,[isInitialLoad])
   
    console.log(`Wallet Check: ${Object.values(props.Blockchain.walletSpecs)}`)

    // check if wallet alrdy enabled
    // if enabled wallet found, will update with all walletSpecs 
    // set adaBalance state
    async function connectEnabledWallet  (){
        let enabledWallet = await blockchain_utils.checkEnable()
        if ( enabledWallet !== null ){
            // console.log(`enabledWalletOn1stRender: ${Object.keys(enabledWallet)}`)
            try{
                await ConnectWallet(blockchain)
                setWalletConnected(true)
                setWalletAda((blockchain_utils.lovelace2Ada(blockchain.wallet.adaBalance)).toFixed(2)+ ' ADA')
                console.log(`connectEnabledWallet: `)
                console.log(blockchain)
            }
            catch(error){ console.log(error)}
        }else console.log(`No Wallet enabled on initial render`)
    }
    async function handleWallet(){
        await ConnectWallet(blockchain) // walllet connector
        setWalletAda((blockchain_utils.lovelace2Ada(blockchain.wallet.adaBalance)).toFixed(2)+ ' ADA')
    }
    const handleLogoClick = ()=>{
        
        console.log(`onclick : ${window.location.pathname}`)
        console.log(`Home Path?: ${window.location.pathname==='/'}`)
    }
    
    return (
    
        <nav className="navbar">

                { <Link to="/" >
                    <button className="hiddenButton"  onClick={handleLogoClick}><img src={naruHehe} className='logo2' /></button>
                </Link>}
                
                {!walletConnected&&<button className='navbar-connectWallet'  onClick={handleWallet}> 
                    {walletAda} 
                </button>}

                {walletConnected&&<Link to="/profilepage"> 
                    <button className='navbar-connectWallet' onClick={handleLogoClick}> 
                        {walletAda} 
                    </button>
                </Link>}
    
        </nav>
    )
}