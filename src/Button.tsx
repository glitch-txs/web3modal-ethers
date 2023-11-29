import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react'
import { BrowserProvider } from 'ethers'

export function EthersConnectButton() {
  const { isConnected, address } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()

  console.log("provider", walletProvider)
  console.log("Connected",isConnected)

  async function onSignMessage() {
    try {
      if(!walletProvider) throw Error("User disconnected")
      const ethersProvider =  new BrowserProvider(walletProvider)
      const signer = await ethersProvider.getSigner()

      const signature = await signer?.signMessage('Hello Web3Modal Ethers')
      console.log(signature)
    } catch (er){console.log(er)}
  }

  return (
    <>
      <w3m-button />
      address:{address}
      {isConnected ? <button onClick={() => onSignMessage()}>Sign Message</button> : null}
    </>
  )
}