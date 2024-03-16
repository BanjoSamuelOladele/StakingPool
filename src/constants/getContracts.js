import { ethers } from "ethers";
// import StakingPoolAbi from "./StakingPoolAbi.json";
// import StakingTokenAbi from "./StakingTokenAbi.json"


export const getStakingPoolContract = (signer, contractAddress, abi) => new ethers.Contract(
    contractAddress,
    abi,
    signer
);