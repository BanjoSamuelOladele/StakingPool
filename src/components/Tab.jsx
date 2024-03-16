import { Box, Tabs, Text } from "@radix-ui/themes";
import Pools from "./Pools";


const Tab = (props) => {

    return (<Tabs.Root defaultValue="account">
            <Tabs.List size={"2"}>
              <Tabs.Trigger value="account">Staking Pool</Tabs.Trigger>
              <Tabs.Trigger value="documents">Staking Token</Tabs.Trigger>
              <Tabs.Trigger value="settings">Reward Token</Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
              <Tabs.Content value="account">
                <Pools />
              </Tabs.Content>

              <Tabs.Content value="documents">
                <Text size="2">Access and update your documents.</Text>
              </Tabs.Content>

              <Tabs.Content value="settings">
                <Text size="2">Edit your profile or update contact information.</Text>
              </Tabs.Content>
            </Box>
        </Tabs.Root>)

}

export default Tab;