import SibApiV3Sdk from 'sib-api-v3-sdk'

// const biApiKey='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';
const biApiKey = process.env.REACT_APP_BLUE_IN_API_KEY
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
  subject:"Heloo",
  textContent:"helow world"
}).then(console.log).catch(console.log)