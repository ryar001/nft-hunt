
import {Value }from "@emurgo/cardano-serialization-lib-asmjs"
    /**
    //  * Gets the current balance of in Lovelace in the user's wallet
    //  * This doesnt resturn the amounts of all other Tokens
    //  * For other tokens you need to look into the full UTXO list
    //  */
import {Buffer} from "buffer"
async function getBalance (API)  {
        try {
            const balanceCBORHex = await API.getBalance();

            const balance = Value.from_bytes(Buffer.from(balanceCBORHex, "hex")).coin().to_str();
            return balance

        } catch (err) {
            console.log(err)
        }
    }

export default async function ConnectWallet(blockchain){
        // Wallet.setBlockfrost("testnetcTmGVtySjXnAmkdtwfzgmZIP8p07CDYm")
        let userSelectedWallet="eternl"
        // console.log(Object.keys(blockchain.walletSpecs))
   
     
        let injectedWallets = window.cardano
        for (const walletKey in injectedWallets ){
            console.log(walletKey)
            console.log(`userSelected: ${userSelectedWallet}`)
                if (userSelectedWallet===walletKey){
                    console.log(`accepted wallets: ${walletKey}`)
                    injectedWallets[walletKey].enable()
                    console.log(`enabled wallet: ${walletKey}`)
                    
                    blockchain.walletSpecs.apiVersion=injectedWallets[walletKey].apiVersion
                    blockchain.walletSpecs.name=injectedWallets[walletKey].name
                    console.log(`walletSpecs: ${Object.values(blockchain.walletSpecs)}`)
                    blockchain.API=await window.cardano[walletKey].enable();
                    console.log(`API: ${Object.values(blockchain.API)}`)
                    console.log(`adaBalance: ${await blockchain.API.getBalance()}`)

                    blockchain.wallet.adaBalance=getBalance(blockchain.API)
                    console.log(`adaBalanceStr: ${await blockchain.wallet.adaBalance}`)

                    blockchain.chainParams.networkId=blockchain.API.networkId()
                    return 1
                }
                
        //     }
        //    catch(err){
        //         console.log(err)
        //    }
        }
        alert('Selected wallet not Found')
}
