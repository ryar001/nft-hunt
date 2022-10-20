import { Value }from "@emurgo/cardano-serialization-lib-asmjs"
import {Buffer} from "buffer"

export default class blockchain_utils{
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
        }
    }
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
}