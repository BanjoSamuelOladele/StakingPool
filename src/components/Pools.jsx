import { Box, Card, Flex, Text } from "@radix-ui/themes";


const Pools = () => {
    return(
        <Card style={{ maxWidth: 240 }}>
            <Flex gap="3" align="center">
                <Box>
                    <Text as="div" size="2" weight="bold">
                        Teodros Girmay
                    </Text>
                    <Text as="div" size="2" color="gray">
                        Engineering
                    </Text>
                </Box>
            </Flex>
        </Card>

    )
}

export default Pools;