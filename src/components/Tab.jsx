import { Box, Tabs, Text } from "@radix-ui/themes";
// import Pools from "./Pools";
// import usePools from "../hooks/usePools";


const Tab = () => {
    return (<Tabs.Root defaultValue="Staking_Pool">
            <Tabs.List size={"2"}>
              <Tabs.Trigger value="Staking_Pool">Staking Pool</Tabs.Trigger>
              <Tabs.Trigger value="Staking_Token">Staking Token</Tabs.Trigger>
              <Tabs.Trigger value="Reward_Token">Reward Token</Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
              <Tabs.Content value="Staking_Pool">
                {/* {pools.map((pool, index) => (
                    <Pools
                      key={index}
                      totalStakers={pool.totalStakers}
                      totalStaked={pool.totalStaked}
                      rewardReserve={pool.rewardReserve}
                      rewardRate={pool.rewardRate}
                    />
                  ))} */}
              </Tabs.Content>

              <Tabs.Content value="Staking_Token">
                <Text size="2">Access and update your documents.</Text>
              </Tabs.Content>

              <Tabs.Content value="Reward_Token">
                <Text size="2">Edit your profile or update contact information.</Text>
              </Tabs.Content>
            </Box>
        </Tabs.Root>)

}

export default Tab;