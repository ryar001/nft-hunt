import { Value,Address }from "@emurgo/cardano-serialization-lib-asmjs"
import {Buffer} from "buffer"

export default class Blockchain_utils{
    
    // check if any wallet is enable
   // return the API if enable
    async checkEnable(){
        let wallets = window.cardano
        for (const wallet in wallets){
            try {
                    
                if (await wallets[wallet].isEnabled()) return wallets[wallet].enable()
                }
            catch (error) {console.log(error)}
        }
        return null
    }
        
    // convert lovelace (the smallest unit of ADA) to ADA
    // static it for instant initialization
    lovelace2Ada(lovelace){
        return lovelace/1000000
    }

    /*
    get the ADA balance of the wallet in Lovelace
    API:window.cardano[WALLET_INJECTED].enable()
    */
    async getBalance (API)  {
        try {
            const balanceCBORHex = await API.getBalance();

            const balance = Value.from_bytes(Buffer.from(balanceCBORHex, "hex")).coin().to_str();
            return balance

        } catch (err) {
            console.log(err)
        }}
     /**
     * Gets the Network ID to which the wallet is connected
     * 0 = testnet
     * 1 = mainnet
     * Then writes either 0 or 1 to state
     */
    getNetworkId = async (API) => {
        try {
            const networkId = await API.getNetworkId();
            return(networkId)

        } catch (err) {
            console.log(err)
        }
    }
    getChangeAddress = async (API) => {
        try {
            const raw = await API.getChangeAddress();
            const changeAddress = Address.from_bytes(Buffer.from(raw, "hex")).to_bech32()
            return changeAddress
        } catch (err) {
            console.log(err)
        }
    }
    getRewardAddresses = async (API) => {

        try {
            const raw = await API.getRewardAddresses();
            const rawFirst = raw[0];
            const rewardAddress = Address.from_bytes(Buffer.from(rawFirst, "hex")).to_bech32()
            // console.log(rewardAddress)
            return rewardAddress
        } catch (err) {
            console.log(err)
        }
    }
    getUsedAddresses = async (API) => {

        try {
            const raw = await API.getUsedAddresses();
            const rawFirst = raw[0];
            const usedAddress = Address.from_bytes(Buffer.from(rawFirst, "hex")).to_bech32()
            // console.log(rewardAddress)
            return usedAddress

        } catch (err) {
            console.log(err)
        }
    }
}
