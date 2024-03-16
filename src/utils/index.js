import { getRewardTokenContract, getStakingPoolContract, getStakingTokenContract } from "../constants/getContracts";
import { readAndChangeState } from "../constants/providers";


export const isSupportedChainId = (chainId) => Number(chainId) === 11155111;

export const readAndWriteStakingPool = async (provider) => {
    const changeAndRead = readAndChangeState(provider);
    const signer = await changeAndRead.getSigner();
    return getStakingPoolContract(signer);
}


export const readAndWriteStakingToken = async (provider) => {
    const changeAndRead = readAndChangeState(provider);
    const signer = await changeAndRead.getSigner();
    return getStakingTokenContract(signer);
}

export const readAndWriteRewardStakingToken = async (provider) => {
    const changeAndRead = readAndChangeState(provider);
    const signer = await changeAndRead.getSigner();
    return getRewardTokenContract(signer);
}

