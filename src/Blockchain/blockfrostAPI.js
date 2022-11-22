class BlockfrostAPI{
    constructor(project_id){
        
        this.requestOptions={
            method:'GET',
            mode:"cors",
            headers: {
                project_id : project_id
            }
        }
        this.baseUrl = "https://cardano-mainnet.blockfrost.io/api/v0/"
    }
    blockfrostAPI = async (apiExt="")=>{
        // setting up http request to the block frost api
        
        
        const responseData=await fetch(this.baseUrl+apiExt,this.requestOptions).then((response) => response.json())
        // const data=await resp.json()
        // console.log(`${apiExt} : ${Object.values(responseData)}`)
        return responseData
        }
}
export default BlockfrostAPI
