import { ethers } from "ethers";


export const getStakingPoolContract = (signer) => new ethers.Contract(
    "",
    "",
    signer
);