import React from "react"
import "./index.css"
import { useState, useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import emailAlert  from "./emailAlert.jsx"
import Cards from "./Cards.jsx"
import nftJson from "./../../assets/nftJson/Yummi-Universe-Naru.json"
console.log(nftJson["Naru01156"].onchain_metadata.attributes)
export function Forms() {
    // Note if set state that req prev state, use a function as input to the state-setting fcuntion instead
    const [isHover, toggleState] = useState(false)
    const [userInput,setUserInput] = useState("")
    const [showCard,toggleCard]=useState(false)
    const [nftData, setData] = useState(null)
    const cloudSvc = "https://ipfs.io/ipfs/"
    // const [nftImg,setNftImg]=useState("src/components/Navbar/assets/NaruHehe.jpeg")
    const [nftImg,setNftImg]=useState("")
    // mapping function to easily apply React to each element in the arrays
    // willl be replace with props.ipfs to display he nft
    //read files
    // function displayMetaData(data){
    //     let tmp=Object.keys(data).map(attr=>{return <div key={attr} className='metadata'>{attr}: {data[attr]}</div>})
    //     setData(tmp)
    // }
    function displayMetaData(name,data){
        
        let attrData=data[name].onchain_metadata.attributes
        
        attrData=Object.assign({"NFT Name":name},attrData)
        console.log("LLL: ",attrData)
        let tmp=Object.keys(attrData).map(attr=>{return <div key={attr} className='metadata'>{attr}: {attrData[attr]}</div>})
        setData(tmp)
    }
    
    async function pullData(nftName){
        // nftJson may be reqplace with blockfrost api call or will cont use with full JSONcontaining all Narus/nft set
    
        var ifps
        var nft

        // emailAlert(nftName)

        console.log(`attr check: ${nftName in nftJson} `)
        if (nftName in nftJson){
            toggleCard(true)
            // getting the ifps info for the img
            nft=nftJson[nftName]
            ifps=nft.onchain_metadata.image
            let i=ifps.indexOf('//')
            ifps=ifps.slice(i+2,ifps.length)
            let img=cloudSvc+ifps
            // let resp=await fetch(cloudSvc+ifps)
            // let blob=await resp.blob()
            // let reader=new FileReader()
            // var imageFromBase64
            // reader.readAsDataURL(blob)
            // reader.onloadend =()=>{
            //     const imgData=reader.result
            //     // console.log(imgData)
            //     imageFromBase64 = new Image()
            //     imageFromBase64.src=imgData
            // }
            // console.log(imageFromBase64)
            // setNftImg("src/components/Navbar/assets/NaruHehe.jpeg")
            window.addEventListener("load", event => {
                var image = document.querySelector('img');
                var isLoaded = image.complete && image.naturalHeight !== 0;
                alert(isLoaded);
            });
            setNftImg(img)
            displayMetaData(nftName,nftJson)
            // displayMetaData(nftName,nftJson[nftName].onchain_metadata.attributes)
            console.log(cloudSvc+ifps)
            }
        else{
            alert(`${nftName} is not a valid NFT`)
            toggleCard(false)

        }
        }
      
    // first alphabet check
    function isLetter(c) {
        return c.toLowerCase() != c.toUpperCase();
      }
    
    async function handleSubmit() {
        var tmp
        console.log(nftJson)
        // if user put Naru
        if (isLetter(userInput.substring(0, 1))) {
            tmp=userInput.toLowerCase()
            tmp = tmp.substring(0, 1).toUpperCase() + tmp.substring(1, tmp.length+1)  
        }
        else {
            // add the 0 in front before ADDING Naru
            // eg 1156 -> 01156 -> Naru01156
            if (userInput.length<5){
                let diff = 5-userInput.length

                tmp=userInput
                for (let i = 0; i < diff; i++) {
                    tmp="0"+tmp
                    console.log(tmp)
                  }
                tmp="Naru"+tmp
                console.log(`final tmp: ${tmp}`)
                
            }
            else{
                tmp="Naru"+userInput
            }
        }
        
        setUserInput(tmp)
        pullData(tmp) // proceed to pull meta data and attribute
    }
    function handleHover() {
        toggleState(true)
        console.log("button on")

    }
    function handleLeave() {
        toggleState(false)
        console.log("button off")
    }
    async function handleText(inputText) {
        setUserInput(inputText.target.value)
        
        console.log(userInput)
    }
    return (
        <div>
            <div className="form">
                <input type="text" placeholder="NFT name" className="input" onChange={handleText} autoComplete="off"/>
                <button onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleSubmit} className="form-submit">
                    {isHover && <div className="form-mouseHoverText">Submit!</div>}
                    {!isHover && <div className="form-mouseLeaveText">Submit!</div>}
                </button>
            </div>
            {<div className="forms-cardArea"> 
                {showCard && <Cards nftData={nftData} nftImg={nftImg} />}
                {/* <Cards nftData={nftData} nftImg={nftImg} /> */}
            </div>}


        </div>
    )

}