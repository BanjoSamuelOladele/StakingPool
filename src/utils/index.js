import { getStakingPoolContract } from "../constants/getStakingPoolContract";
import { readAndChangeState } from "../constants/providers";


export const isSupportedChainId = (chainId) => Number(chainId) === 11155111;

export const readAndWriteStakingPool = async (provider) => {
    const changeAndRead = readAndChangeState(provider);
    const signer = await changeAndRead.getSigner();
    return getStakingPoolContract(signer);
}