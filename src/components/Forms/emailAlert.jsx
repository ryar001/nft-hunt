import SibApiV3Sdk from "sib-api-v3-sdk"

export default async function emailAlert(nftName)    {
    const biApiKey=import.meta.env.VITE_BLUE_IN_API_KEY
    console.log(`API: ${biApiKey.VITE_BLUE_IN_API_KEY}`)
    var Client = SibApiV3Sdk.ApiClient.instance;
    // # Instantiate the client\
    var apiKey = Client.authentications['api-key'];
    apiKey.apiKey = biApiKey;
    const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi()
    const sender={
      email: 'ryar001994@gmail.com',
    }
    
    const receiver=[{
      email: 'runming_12_94@hotmail.com',
    },
    ]
    
    tranEmailApi.sendTransacEmail({
      sender,
      to: receiver,
      subject: nftName,
      textContent:`${nftName} is on Market!`
    }).then(console.log).catch(console.log)

}
