
import market from  "../assets/marketAddr.json"
import BlockfrostAPI from "./blockfrostAPI.js"
import utils from "../utils/utils.js"
const bfNftTrack = async (project_id,asset="b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753031313536")=>{
    /* takes the project_id from blockfrost api to authicate and track the location of the nft with the full asset name
    nft-hex-name + policy id  */
    console.log(`bfNFT: ${asset}`)
    const marketStakeKey = market.stakeKey
    console.log(`marketStakekey: ${marketStakeKey}`)
    
    // initialize blockfrost API with project_id from blockfrost  
    const tmp = new BlockfrostAPI(project_id)
    const API = tmp.blockfrostAPI
    const assetAddress = await API(`assets/${asset}/addresses`).then((resp)=>resp[0].address) // look for the NFT is located
    let assetStakeAddr = await API(`addresses/${assetAddress}`).then((resp)=>resp.stake_address)//get the located nft stakeKey
    // let addresses = await API(`accounts/${assetStakeAddr}/addresses`)//get the located nft stakeKey
    if (assetStakeAddr == null){
        console.log('no stake addr')
        console.log(`Asset currently at: ${assetAddress}`)
    }else{
        if (assetStakeAddr == marketStakeKey){
            console.log("Asset is on the Market!!")
        }else{
            console.log(`Asset currently at: ${assetAddress}`)
        }
    }
    // console.log(`assetAddr : ${assetAddress}`)
    // console.log(`assetStakeAddr : ${assetStakeAddr}`)
    // console.log(`addresses with stakeKey: ${(addresses.flat())}`)
    }

export default bfNftTrack;