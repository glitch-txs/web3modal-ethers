import { useWeb3ModalSigner } from '@web3modal/ethers5/react'
import { ethers } from 'ethers'
import React from 'react'

type Props = {
  address: string
  chain: string
}

const tokenAbi = ["function approve(address spender, uint256 amount) external returns (bool)"]
const Transaction = ({address, chain}: Props) => {

  const { walletProvider:provider } = useWeb3ModalSigner()

  async function transaction(){
    const signer = provider?.getSigner()
    const contract = new ethers.Contract(address, tokenAbi, signer)
    const receipt = await contract.approve(address, 0)
    console.log(receipt)
  }

  return (
    <button onClick={transaction} >Approve in {chain}</button>
  )
}

export default Transaction