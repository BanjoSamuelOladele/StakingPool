import { Box, Card, Flex, Text } from "@radix-ui/themes";


const Pools = () => {
    return(
        <Card style={{ maxWidth: 240 }}>
            <Flex gap="3" align="center">
                <Box>
                    <Text as="div" size="2" weight="bold">
                        TotalStakers
                    </Text>
                    <Text as="div" size="2" weight="bold" color="gray">
                        TotalStaked
                    </Text>
                    <Text as="div" size="2" weight="bold" color="gray">
                        RewardReserve
                    </Text>
                    <Text as="div" size="2" weight="bold" color="gray">
                        RewardRate
                    </Text>
                </Box>
            </Flex>
        </Card>

    )
}

export default Pools;