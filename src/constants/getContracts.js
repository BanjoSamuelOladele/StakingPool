import { ethers } from "ethers";
import StakingPoolAbi from "./StakingPoolAbi.json";


export const getStakingPoolContract = (signer) => new ethers.Contract(
    "0xf4FCf7F898b07232176463afbC18cf7614E6e158",
    StakingPoolAbi,
    signer
);

// export const getStakingTokenContract = (signer) = new ethers.Contract(
//     "",
//     "",
//     signer
// );

// export const getRewardTokenContract = (signer) = new ethers.Contract(
//     "",
//     "",
//     signer
// );
