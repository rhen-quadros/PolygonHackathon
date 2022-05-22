const CONTRACT_ADDRESS = "0x713e1694640E62F27ceAC469096Ca14e10C01826"
const META_DATA_URL = "ipfs://bafyreibixc5ssbhjnz2hcio6urt2ktryl6cl4xiippvco5ldmhso6k5n34/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });