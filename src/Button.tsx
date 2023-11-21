import { useWeb3ModalAccount, useWeb3ModalSigner } from '@web3modal/ethers5/react'

export function EthersConnectButton() {
  const { isConnected, address } = useWeb3ModalAccount()
  const { walletProvider: provider } = useWeb3ModalSigner()

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