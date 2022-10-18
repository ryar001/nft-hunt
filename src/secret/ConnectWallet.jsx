import Wallet from "@harmonicpool/cardano-wallet-interface";
import {useState , useEffect} from "react"
export default async function ConnectWallet(){
    let Typhon = undefined;
    let CCVault = undefined
    const ITyphon = Wallet.getInterface( Wallet.Names.Typhon );
    const ICCVault = Wallet.getInterface( Wallet.Names.CCVault );
    for( let i = 0; i < Wallet.stringNames.length; i++ )
    {
        // const thisCycleWallet = Wallet.get( Wallet.stringNames[i] );
        
        console.log( Wallet.stringNames[i] );
        console.log(Wallet.has(Wallet.stringNames[i]))
    }
    if( 
        // ITyphon.isInjected() // equivalent to ```Wallet.has( Wallet.Names.Typhon )```
        ICCVault.isInjected()
    )
    {
        if(
            // ITyphon.isAviable()
            ICCVault.isAviable()
             // if enabled before returns true, no need to perform async calls
        )
        {
            CCVault = Wallet.CCVault
            // Typhon = Wallet.Typhon; // Wallet.get( Wallet.Names.Typhon ) will do the same
        }
    }
    else // async code needed
    {
        if(
            // await ITyphon.isEnabled() // @returns {Promise<boolean>} as per CIP0030 definition
            await ICCVault.isEnabled()
            )
        {
            // Typhon = Wallet.Typhon; // same as before
            CCVault = Wallet.CCVault
        }
        else
        {
            await Wallet.enable( Wallet.Names.CCVault ); // makes the object aviable
            CCVault = Wallet.CCVault; // same as before
        }
    }
   
}
