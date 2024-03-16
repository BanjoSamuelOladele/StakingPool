

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId
const projectId = '2de4980c05f2420388f22d3e9b7fc318'

// 2. Set chains
const sepolia = {
  chainId: 11155111,
  name: 'Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.etherscan.io',
  rpcUrl: 'https://sepolia.infura.io/v3/2de4980c05f2420388f22d3e9b7fc318'
}

// 3. Create a metadata object
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}


// 5. Create a Web3Modal instance
export const configureWeb3Modal = () =>{
    createWeb3Modal({
    ethersConfig: defaultConfig({metadata}),
    chains: [sepolia],
    projectId,
    enableAnalytics: false // Optional - defaults to your Cloud configuration
    })
}