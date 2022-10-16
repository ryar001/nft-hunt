import React from "react"
import "./index.css"
import { useState, useEffect } from 'react'

export default function Cards(props) {
    return(
     
        
            <div className="cards"><div>
                <img src={props.nftImg} className='cards-img' /></div>
                <div className="cards-attr">
                    {props.nftData!=null && props.nftData}
                </div>
                
            </div>
        
        
    )
    
}