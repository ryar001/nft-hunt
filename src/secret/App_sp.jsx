import { useState, useEffect } from 'react'
import someDude from "./../assets/someDude.png"
import ConnectWallet from './ConnectWallet.jsx'

export default function App_sp() {
    const [count, setCount] = useState(0)
  
    return (
      <div className="App_sp">
        <img src={someDude}/>
        <button onClick={ConnectWallet}></button>
      </div>
    )
  }
  
