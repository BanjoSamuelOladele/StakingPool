import { readAndChangeState } from "../constants/providers";


export const readAndWriteStakingPool = async (provider) => {
    const changeAndRead = readAndChangeState(provider);

    const signer = await changeAndRead.getSigner();

    return signer;
}