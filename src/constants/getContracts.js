import { ethers } from "ethers";
import StakingAbi from "./StakingAbi.json";


export const getStakingPoolContract = (signer) => new ethers.Contract(
    "",
    StakingAbi,
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
