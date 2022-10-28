import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, push, update,set  } from "firebase/database";
export default class DB_utils{
    constructor(){
        const firebaseConfig = {
            // ...
            // The value of `databaseURL` depends on the location of the database
            databaseURL: "https://hellop-40d49-default-rtdb.asia-southeast1.firebasedatabase.app"
          };
          
          // Initialize Firebase
          let app = initializeApp(firebaseConfig);
          
          
          // Initialize Realtime Database and get a reference to the service
          this.database = getDatabase(app);
    }
    // probably need to query for acct info before creating
    createNewAcct(addr ) {
        set(ref(this.database, 'pubKey/' + addr), {
            stakeKey:addr
          
        });
        console.log(`acct created`)
      }
}