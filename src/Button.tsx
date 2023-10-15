import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers-5/react'

export function EthersConnectButton() {
  const { isConnected, address } = useWeb3ModalAccount()
  const { provider } = useWeb3ModalProvider()

  console.log("provider", provider)
  console.log("Connected",isConnected)

  async function onSignMessage() {
    try {
      const signer = provider?.getSigner()

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