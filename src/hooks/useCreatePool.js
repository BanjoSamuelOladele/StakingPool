import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react"
import { isSupportedChainId } from "../utils";
import { readAndChangeState } from "../constants/providers";
import { getStakingPoolContract } from "../constants/getContracts";


const useCreatePool = (rewardRate) => {
    const {chainId} = useWeb3ModalAccount();
    const {walletProvider} = useWeb3ModalProvider();
    return useCallback(async() => {
        if(!isSupportedChainId(chainId)) return "Not in the supported network";
        const provider = readAndChangeState(walletProvider);
        const signer = await provider.getSigner();
        const contract = getStakingPoolContract(signer);
        try{
            const tx = await contract.createPool(rewardRate);
            const receipt = await tx.wait();
            if(receipt.status){
                console.log("successfully created a pool");
            }
        }catch(error){
            console.error(error);
        }
      },
      [rewardRate, chainId],
    )    
}

export default useCreatePool;