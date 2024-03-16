import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChainId, stakeTokenContractAddress, stakingPoolContractAddress } from "../utils";
import { readAndChangeState } from "../constants/providers";
import { getStakingPoolContract } from "../constants/getContracts";
import StakingPoolAbi from "../constants/StakingPoolAbi.json";
import StakingTokenAbi from "../constants/StakingTokenAbi.json";


// 0xf4FCf7F898b07232176463afbC18cf7614E6e158

const useStake = (amount) => {
    const {chainId} = useWeb3ModalAccount();
    const {walletProvider} = useWeb3ModalProvider();
    if(typeof(amount) !== Number) return "Amount to stake must be a number";

    return useCallback(async() => {
        if (!isSupportedChainId(chainId)) return "not in the supported chain";
        const provider = readAndChangeState(walletProvider);
        const signer = await provider.getSigner();

        const contract = getStakingPoolContract(signer, stakingPoolContractAddress, StakingPoolAbi);

        const stakeToken = getStakingPoolContract(signer, stakeTokenContractAddress, StakingTokenAbi);


        try{
            const check = stakeToken.allowance(signer, "");
            if (check >= amount){
                const staking = await contract.stake(amount);
                const receipt = await staking.wait();

                if(receipt.status){
                    return "staked successfully";
                }
                console.log("an eeror error occured");
            }
            else if(check === 0){
                console.log("Need to approve staking contract before stake can be done")
            }
            else{
                console.log("Not enough approval")
            }
        }catch(error){
            console.error(error);
        }
      },
      [second],
    )
    
}

export default useStake;