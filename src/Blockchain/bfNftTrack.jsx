
const bfNftTrack =async (project_id)=>{
    console.log(`proj_id: ${project_id}`)
    const requestOptions={
        method:'GET',
        mode:"cors",
        headers: {
            project_id : "mainnetSU8MYwzvxB1DgC6L0At8BnSzyAOlbY1K"
        }
    }
    const url = "https://cardano-mainnet.blockfrost.io/api/v0/blocks/latest"
    const resp=await fetch(url,requestOptions)
    const data=await resp.json()
    console.log(data)
    }

export default bfNftTrack;