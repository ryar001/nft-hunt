// import { Blockfrost, Lucid } from "https://deno.land/x/lucid@0.6.6/mod.ts"; Deno
import { Blockfrost, Lucid } from "lucid-cardano"; // NPM

export default async function WalletConnect() {
  const lucid = await Lucid.new(
    new Blockfrost("https://cardano-testnet.blockfrost.io/api/v0", "testnetcTmGVtySjXnAmkdtwfzgmZIP8p07CDYm"),
    "Testnet",
  );
  
  // Assumes you are in a browser environment
  const api = await window.cardano.nami.enable();
  lucid.selectWallet(api);
  
  // const tx = await lucid.newTx()
  //   .payToAddress("addr...", { lovelace: 5000000n })
  //   .complete();
  
  // const signedTx = await tx.sign().complete();
  
  // const txHash = await signedTx.submit();
  
  console.log(txHash);
}
