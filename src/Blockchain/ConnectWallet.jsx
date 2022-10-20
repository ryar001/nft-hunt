
import { Value }from "@emurgo/cardano-serialization-lib-asmjs"
import blockchain_utils from "./blockchain_utils.js"



export default async function ConnectWallet(blockchain){
    const  utils=new blockchain_utils()
    // Wallet.setBlockfrost("testnetcTmGVtySjXnAmkdtwfzgmZIP8p07CDYm")
    let userSelectedWallet="eternl"
    // console.log(Object.keys(blockchain.walletSpecs))

    
    let injectedWallets = window.cardano
    for (const walletKey in injectedWallets ){
        console.log(walletKey)
        console.log(`userSelected: ${userSelectedWallet}`)
            if (userSelectedWallet===walletKey){
                console.log(`accepted wallets: ${walletKey}`)
                console.log(`isEnabled: ${await injectedWallets[walletKey].isEnabled()}`)
                blockchain.API=await injectedWallets[walletKey].enable()
                console.log(`isEnabled2: ${await injectedWallets[walletKey].isEnabled()}`)

                console.log(`enabled wallet: ${walletKey}`)
                if (injectedWallets[walletKey].isEnabled()) {
                    blockchain.walletSpecs.walletIsEnabled=true
                    blockchain.wallet.adaBalance = await utils.getBalance(blockchain.API)
                    console.log(`adaBalanceStr: ${ utils.lovelace2Ada(blockchain.wallet.adaBalance)} ADA`)
                    blockchain.chainParams.networkId = await utils.getNetworkId(blockchain.API)
                    // await getNetworkId();
                    // await this.getUtxos();
                    // await this.getCollateral();
                    // await this.getBalance();
                    // await this.getChangeAddress();
                    // await this.getRewardAddresses();
                    // await this.getUsedAddresses();
                }
                blockchain.walletSpecs.apiVersion=injectedWallets[walletKey].apiVersion
                blockchain.walletSpecs.name=injectedWallets[walletKey].name
                console.log(`walletSpecs: ${Object.values(blockchain.walletSpecs)}`)
                // blockchain.API=await window.cardano[walletKey].enable();
                // console.log(`API: ${Object.values(blockchain.API)}`)
                // console.log(`adaBalance: ${await blockchain.API.getBalance()}`)

                
                console.log(`networkId: ${blockchain.chainParams.networkId}`)
                return 1
            }
            
    //     }
    //    catch(err){
    //         console.log(err)
    //    }
    }
    alert('Selected wallet not Found')
}
