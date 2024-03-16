import { ethers } from "ethers";
import StakingPoolAbi from "./StakingPoolAbi.json";


export const getStakingPoolContract = (signer) => new ethers.Contract(
    "",
    StakingPoolAbi,
    signer
);

export const getStakingTokenContract = (signer) = new ethers.Contract(
    "",
    "",
    signer
);

export const getRewardTokenContract = (signer) = new ethers.Contract(
    "",
    "",
    signer
);
