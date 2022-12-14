import { Value } from "@emurgo/cardano-serialization-lib-asmjs";
import Blockchain_utils from "./blockchain_utils.js";

export default async function ConnectWallet(blockchain) {
  const blockchain_utils = new Blockchain_utils();
  // Wallet.setBlockfrost("testnetcTmGVtySjXnAmkdtwfzgmZIP8p07CDYm")
  let userSelectedWallet = "eternl";
  let injectedWallets = window.cardano;
  console.log(`userSelected: ${userSelectedWallet}`);
  for (const walletKey in injectedWallets) {
    console.log(`currentWalletKey: ${walletKey}`);
    if (userSelectedWallet === walletKey) {
      console.log(`accepted wallets: ${walletKey}`);
      // console.log`isEnabled1: ${await injectedWallets[walletKey].isEnabled()}`;

      // request initial wallet connection
      // .enable() will enable wallet first
      // if an enabled wallet is given .enable()
      // it returns the API to call the wallet
      let walletEnabled = await injectedWallets[walletKey].isEnabled()
      if ( walletEnabled ){
        console.log`Requesting enable wallet`
        await injectedWallets[walletKey].enable();
        // console.log(`isEnabled: ${await injectedWallets[walletKey].isEnabled()}`);
        console.log(`Enabled wallet: ${walletKey}`);
      }
      if (walletEnabled )  {
        console.log(`isEnabled: ${walletEnabled}`);
        blockchain.API = await injectedWallets[walletKey].enable();
        blockchain.walletSpecs.walletIsEnabled = true;
        blockchain.wallet.adaBalance = await blockchain_utils.getBalance(blockchain.API);
        console.log(`adaBalanceStr: ${blockchain_utils.lovelace2Ada(blockchain.wallet.adaBalance)} ADA`);
        blockchain.chainParams.networkId = await blockchain_utils.getNetworkId(blockchain.API);
        blockchain.walletSpecs.apiVersion = injectedWallets[walletKey].apiVersion;
        blockchain.walletSpecs.name = injectedWallets[walletKey].name;
        console.log(`walletSpecs: ${Object.values(blockchain.walletSpecs)}`);
        console.log(`networkId: ${blockchain.chainParams.networkId}`);
        blockchain.wallet.usedAddr=await blockchain_utils.getUsedAddresses(blockchain.API)
        console.log(`UsedAddr: ${ blockchain.wallet.usedAddr}`)
        blockchain.wallet.changeAddr=await  blockchain_utils.getChangeAddress(blockchain.API)
        console.log(`changeAddr: ${ blockchain.wallet.changeAddr}`)
        blockchain.wallet.rewardAddr=await  blockchain_utils.getRewardAddresses(blockchain.API)
        console.log(`rewardAddr: ${ blockchain.wallet.rewardAddr}`)
        return 1;
        // future implementation
        // await getNetworkId();
        // await this.getUtxos();
        // await this.getCollateral();
        // await this.getBalance();
        // await this.getChangeAddress();
        // await this.getRewardAddresses();
        // await this.getUsedAddresses();
      }}}
  alert("Selected wallet not Found");
}
