import ConnectWallet from "./ConnectWallet";

export default class Blockchain {
    static params={
            API:undefined,
            walletSpecs:{

                apiVersion:undefined,
                name:'eternl',
                walletIsEnabled:false,
    
            },
            wallet:{
                adaBalance:undefined,
                utxoAvail:undefined
            },
            chainParams:{
                networkId:undefined
            },
            txParams:{
                changeAddr:undefined
            }
            
            
        
    } 
             
        

    

}