import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

const projectId = 'bd4997ce3ede37c95770ba10a3804dad'

const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}
  
// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}
  
createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
