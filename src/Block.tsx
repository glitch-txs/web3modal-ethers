import { useWeb3ModalProvider } from '@web3modal/ethers-5/react'
import React from 'react'

type Props = {}

const Block = (props: Props) => {
  
  const { provider } = useWeb3ModalProvider()
  
  async function getBlock(){
    if(!provider)throw Error("provider is undefined")

    const block = await provider.getBlockNumber()
    console.log("block", block)
  }

  async function gas(){
    if(!provider)throw Error("provider is undefined")

    const estimate = await provider.estimateGas({
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