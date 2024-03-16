import { useEffect, useState } from "react";
import { getStakingPoolContract } from "../constants/getContracts";
import { readOnlyState } from "../constants/providers";
import StakingPoolAbi from "../constants/StakingPoolAbi.json"
import { stakingPoolContractAddress } from "../utils";


const poolers = {
    totalStakers: 0,
    totalStaked: 0,
    rewardReserve: 0,
    rewardRate: 0
}


const usePools = () => {

    const [pools, setPools] = useState([]);

    const contract = getStakingPoolContract(readOnlyState, stakingPoolContractAddress, StakingPoolAbi);

    useEffect(() => {
        let allPools = []
        try {
                (async() => {
                        const res = await contract.id();
                        for (let index = 0; index < res; index++) {
                            const cc = await contract.getPoolByID(index);
                            const good = Object.create(poolers);
                            good.totalStakers=cc[0];
                            good.totalStaked=cc[1];
                            good.rewardReserve=cc[2];
                            good.rewardRate=cc[3];
                            allPools.push(good);
                        }
                    })()
                setPools(allPools)
        } catch (error) {
            console.error(error);
        }
    }, [])
    return pools;
}


export default usePools;