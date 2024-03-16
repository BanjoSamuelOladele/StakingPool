import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChainId } from "../utils";
import { getStakingPoolContract } from "../constants/getContracts";
import { readAndChangeState } from "../constants/providers";
import StakingPoolAbi from "../constants/StakingPoolAbi.json";


const useUnStake = (number) => {

    const {chainId} = useWeb3ModalAccount();
    const {walletProvider} = useWeb3ModalProvider();

    if(typeof(number) !== Number) return "Not a number";

    return useCallback(async() => {
        if (!isSupportedChainId(chainId)) return "Not in the supported netword";

        const provider = readAndChangeState(walletProvider);
        const signer = await provider.getSigner();

        const poolContract = getStakingPoolContract(
            signer, stakingPoolContractAddress, StakingPoolAbi
        )

        const transaction = await poolContract.unStake(number);
        const receipt = await transaction.wait();


        if(receipt.status){
            console.log("successfull...")
        }

        console.log("Error in connection...")
      },
      [number, chainId, walletProvider],
    )
    

}

export default useUnStake;