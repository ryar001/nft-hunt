import * as IPFS from 'ipfs-core'

const ipfs = await IPFS.create()
const cid = await ipfs.add('Hello world')
const cid2='QmXLWJ4ZoMyshuctvFoEaCfSkjESEM9fKCmjb8vHmAxrhw'
for await (const buf of ipfs.get(cid2)){
    console.log(buf)
}
const n= ipfs.get()

console.log(`pulled: ${Object.keys(n)}`)
console.info(cid)
// QmXXY5ZxbtuYj6DnfApLiGstzPN7fvSyigrRee3hDWPCaf