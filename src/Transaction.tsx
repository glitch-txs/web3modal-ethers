import { useWeb3ModalProvider } from '@web3modal/ethers/react'
import { BrowserProvider, Contract } from 'ethers'

type Props = {
  address: string
  chain: string
}

const tokenAbi = ["function approve(address spender, uint256 amount) external returns (bool)"]
const Transaction = ({address, chain}: Props) => {

  const { walletProvider } = useWeb3ModalProvider()

  async function transaction(){
    if(!walletProvider) throw Error("User disconnected")
    const ethersProvider =  new BrowserProvider(walletProvider)
    const signer = await ethersProvider.getSigner()
    const contract = new Contract(address, tokenAbi, signer)
    const receipt = await contract.approve(address, 0)
    console.log(receipt)
  }

  return (
    <button onClick={transaction} >Approve in {chain}</button>
  )
}

export default Transaction