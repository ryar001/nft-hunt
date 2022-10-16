import React from "react"
import "./index.css"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useState, useEffect } from 'react'
import nftJson from "./../../assets/nftJson/Yummi-Universe-Naru.json"

function getItemList() {
    var newItems=[]
    let i = 0
    for (let Nftname in nftJson){
            // console.log("N: ",Nftname)
            newItems.push({
                id:i,
                name:Nftname})
            i+=1     
        }
    return newItems
        
        
}
export function Dice() {
    const fuseOptions={keys:["name","description"]}
    var newItems=getItemList()
    console.log(newItems[1])

    const resultStringKeyName="name"
    const styling={
        height: "44px",
        border: "1px solid #dfe1e5",
        borderRadius: "24px",
        backgroundColor: "white",
        boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
        hoverBackgroundColor: "#eee",
        color: "#212121",
        fontSize: "16px",
        fontFamily: "Arial",
        iconColor: "grey",
        lineColor: "rgb(232, 234, 237)",
        placeholderColor: "grey",
        clearIconMargin: '3px 14px 0 0',
        searchIconMargin: '0 0 0 16px'
      }
    
    
      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log("typing")
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
    
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(`select: ${item}`)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'right' }}>id: {item.id}</span>
            <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
          </>
        )
      }
    
      return (
        <div className="App">
  
            <div style={{ width: 400 }}> 
              <ReactSearchAutocomplete
                items={newItems}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                resultStringKeyName={resultStringKeyName}
                styling={styling}
                fuseOptions={fuseOptions}
                // formatResult={formatResult}
              />
            </div>
      
        </div>
      )
    }

