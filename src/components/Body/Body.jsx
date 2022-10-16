import React from "react"
import './index.css'// our styling
import { Forms } from "./../Forms/Forms.jsx" // importing local module

import { useState, useEffect } from 'react'


// getting varible from the main function
// then just need props , shorthand for properties
// props.{PROPS NAME}
export function Body(props) {


    return (
        <div className="body">
            <div className="body-instructions">
                <div className="body-howToUse">How to Use:</div>
                <ol className="body-steps">
                    <li>   key in the NFT full name: "NARU01156" OR just the number "1156"</li>
                    <li>    press "Submit" to show NFT data</li>
                    <li>    Hit "SNIPE"  to allow auto buy with smart contract(WIP)</li>
                </ol>
            </div>
            <Forms/>
        </div>
    )
}