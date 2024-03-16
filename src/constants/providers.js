import { ethers } from "ethers";


export const readOnlyState = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/2de4980c05f2420388f22d3e9b7fc318");

export const readAndChangeState = (provider) => new ethers.BrowserProvider(provider);