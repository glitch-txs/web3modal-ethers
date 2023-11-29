import { useWeb3ModalProvider } from '@web3modal/ethers/react'
import { BrowserProvider } from 'ethers'

const Block = () => {
  const { walletProvider } = useWeb3ModalProvider()
  
  async function getBlock(){
    if(!walletProvider) throw Error("User disconnected")
    const ethersProvider =  new BrowserProvider(walletProvider)
    const block = await ethersProvider.getBlockNumber()
    console.log("block", block)
  }

  async function gas(){
    if(!walletProvider) throw Error("User disconnected")
    const ethersProvider =  new BrowserProvider(walletProvider)
    const estimate = await ethersProvider.estimateGas({
      "from": "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
      "to": "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
      "value": "0x186a0",
    });
    console.log(estimate);
  }

  return (
    <>
    <button onClick={gas} >gas</button>
    <button onClick={getBlock} >get block</button>
    </>
  )
}

export default Block