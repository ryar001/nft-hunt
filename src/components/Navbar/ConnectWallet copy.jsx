import Wallet from "@harmonicpool/cardano-wallet-interface";
import {useState , useEffect} from "react"
export default async function ConnectWallet(){
    const[x,y]=useState('')
    Wallet.setBlockfrost("testnetcTmGVtySjXnAmkdtwfzgmZIP8p07CDYm")
    // let Typhon = undefined;
    // var eternl = undefined
    var connectedWallet=undefined
    let currentAllowedWallets=["eternl"]
    // const ITyphon = Wallet.getInterface( Wallet.Names.Typhon );
    // const ICCVault = Wallet.getInterface( Wallet.Names.CCVault );
    for( let i = 0; i < Wallet.stringNames.length; i++ )
    {   console.log(`wallet: ${Wallet.stringNames[i]}`)

        // const thisCycleWallet = Wallet.get( Wallet.stringNames[i] );
        
        // check if wallet injection ie the chrome ext is installed
        if (Wallet.has(Wallet.stringNames[i]) && currentAllowedWallets.includes(Wallet.stringNames[i])){
            let tmp = Wallet.getInterface(Wallet.stringNames[i])
            console.log(`keys: ${Object.keys(tmp)} `)
            console.log(`injected: ${Wallet.stringNames[i]} `)
            console.log(`isinjected:   ${tmp.isInjected()}`)
            
            console.log(`isEnabled:   ${await tmp.isEnabled()}`)
            
            // check if current wallet is available for use
            // 
            if (!tmp.isAviable()){
                if(!tmp.isEnabled()){ // check if current wallet isEnabled, if not enbable it
                    console.log(`enabling: ${Wallet.Names.Eternl}`)
                    tmp.enable() // enabling 
                    connectedWallet=Wallet.Names.Eternl

                }
                else{ // check if current wallet isEnabled, if not enbable it
                    console.log(`enabling: ${Wallet.Names.Eternl}`)
                 
                    connectedWallet=Wallet.get(Wallet.Names.Eternl)
g
                }
            }
            else  { // if availble , just return the wallet, 
                console.log(`Wallet Enabled: ${Wallet.Names.Eternl}`)
                connectedWallet= Wallet.get(Wallet.Names.Eternl)// same as Wallet.get( Wallet.Names.Typhon ) 
                // Wallet.Eternl.getCurrentUserDelegation(),
                // console.log(connectedWallet)
                // Wallet.get(  Wallet.stringNames[i] )

                // console.log(`wallet Get: ${connectedWallet}`)
            }
            // console.log(`Einjected: ${Wallet.stringNames[i]} `)
            // console.log(`Eisinjected:   ${tmp.isInjected()}`)
            // console.log(`EisAvail:   ${tmp.isAviable()}`)
            // console.log(`EisEnabled:   ${await tmp.isEnabled()}`) 
            console.log(`isAvail:   ${tmp.isAviable()}`) 
        } 
        
        
    }
    // console.log(connectedWallet.getCurrentUserDelegation())
    return connectedWallet
    // if( 
    //     // ITyphon.isInjected() // equivalent to ```Wallet.has( Wallet.Names.Typhon )```
    //     ICCVault.isInjected()
    // )
    // {
    //     if(
    //         // ITyphon.isAviable()
    //         ICCVault.isAviable()
    //          // if enabled before returns true, no need to perform async calls
    //     )
    //     {
    //         CCVault = Wallet.CCVault
    //         // Typhon = Wallet.Typhon; // Wallet.get( Wallet.Names.Typhon ) will do the same
    //     }
    // }
    // else // async code needed
    // {
    //     if(
    //         // await ITyphon.isEnabled() // @returns {Promise<boolean>} as per CIP0030 definition
    //         await ICCVault.isEnabled()
    //         )
    //     {
    //         // Typhon = Wallet.Typhon; // same as before
    //         CCVault = Wallet.CCVault
    //     }
    //     else
    //     {
    //         await Wallet.enable( Wallet.Names.CCVault ); // makes the object aviable
    //         CCVault = Wallet.CCVault; // same as before
    //     }
    // }
   
}
