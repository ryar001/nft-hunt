import { useState, useEffect } from 'react'
import someDude from "./../assets/someDude.png"
import ConnectWallet from './ConnectWallet.jsx'
export default function App_sp(blockchain) {
    const [count, setCount] = useState(0)
    const handleClick =()=>{
      console.log(`keys: ${Object.keys(blockchain)}`)
      console.log(Object.values(blockchain))
    }
    return (
      <div className="App_sp">
        <img src={someDude}/>
        <button onClick={handleClick}></button>
      </div>
    )
  }
  
