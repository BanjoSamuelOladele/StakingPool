import { Box, Card, Flex, Text } from "@radix-ui/themes";


const Pools = ({totalStakers, totalStaked, rewardReserve, rewardRate}) => {
    return(
        <Card >
            <Flex gap="3" align="center">
                <Box>
                    <Text as="div" size="2" weight="bold">
                        TotalStakers: {totalStakers}
                    </Text>
                    <Text as="div" size="2" weight="bold" color="gray">
                        TotalStaked: {totalStaked}
                    </Text>
                    <Text as="div" size="2" weight="bold" color="gray">
                        RewardReserve: {rewardReserve}
                    </Text>
                    <Text as="div" size="2" weight="bold" color="gray">
                        RewardRate: {rewardRate}
                    </Text>
                </Box>
            </Flex>
        </Card>

    )
}

export default Pools;