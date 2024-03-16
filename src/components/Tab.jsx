import { Box, Tabs, Text } from "@radix-ui/themes";
import Pools from "./Pools";
import usePools from "../hooks/usePools";


const Tab = () => {
  const pools = usePools();
  console.log("pooling", pools)
    return (<Tabs.Root defaultValue="Staking_Pool">
            <Tabs.List size={"2"}>
              <Tabs.Trigger value="Staking_Pool">Staking Pool</Tabs.Trigger>
              <Tabs.Trigger value="Staking_Token">Staking Token</Tabs.Trigger>
              <Tabs.Trigger value="Reward_Token">Reward Token</Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
              <Tabs.Content value="Staking_Pool">
                {
                  pools.map(item => (
                    <Pools
                      totalStakers={item.totalStakers}
                      totalStaked={item.totalStaked}
                      rewardReserve={item.rewardReserve}
                      rewardRate={item.rewardRate}
                    />
                  ))
                }
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