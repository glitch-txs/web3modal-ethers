import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers-5/react'
import { useEffect } from 'react'

async function initializeWeb3Modal() {
  const projectId = 'bd4997ce3ede37c95770ba10a3804dad'

  const chains = [1, 42161, 137, 43114, 56, 10, 100, 324, 7777777, 8453, 42220, 1313161554]

  const ethersConfig = await defaultConfig({
    projectId,
    chains: [1],
    optionalChains: [42161, 137, 43114, 56, 10, 100, 324, 7777777, 8453, 42220, 1313161554]
  })

  createWeb3Modal({ ethersConfig, chains, projectId, enableEIP6963: true, enableAnalytics: true })
}

initializeWeb3Modal()
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
  }, [])
  return <Component {...pageProps} />
}
