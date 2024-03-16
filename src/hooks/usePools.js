import { useEffect, useState } from "react";
import { getStakingPoolContract } from "../constants/getContracts";
import { readOnlyState } from "../constants/providers";


const poolers = {
    totalStakers: 0,
    totalStaked: 0,
    rewardReserve: 0,
    rewardRat: 0
}


const usePools = () => {

    const [pools, setPools] = useState([]);

    const contract = getStakingPoolContract(readOnlyState);

    // useEffect(() => {
    //     (async() => {
    //         const res = contract.id();
    //         let allPools = []
    //         console.log("result:::", res);
    //         // for (let index = 0; index < res; index++) {
    //         //   const cc = contract.getPoolByID(index);
    //         //   allPools.push(cc);
    //         // }
    //         setPools(allPools)
    //     })()
    // }, [])


    useEffect(() => {
        let allPools = []
        try {
            (async() => {
            const res = await contract.id();
            for (let index = 0; index < res; index++) {
              const cc = await contract.getPoolByID(index);
              const good = Object.create(poolers);
              good.totalStakers = cc[0];
              good.totalStakers = cc[1];
              good.totalStakers = cc[2];
              good.totalStakers = cc[3];
              console.log("wew", cc[3], "at index", index);
              allPools.push(good);
            }
            console.log("resulting ::: ",res);
            })()
            setPools(allPools)
        } catch (error) {
            console.error(error);
        }
    }, [])
    console.log("updating  ")
    return pools;
}


export default usePools;