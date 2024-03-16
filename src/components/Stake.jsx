import { useState } from "react";
import useStake from "../hooks/useStake";



const Stake = () => {
    const [amount, setAmount] = useState("");
    const [id, setId] = useState("");

    const handleStake = useStake(id, amount);

    const handleChange = (e) => setAmount(e.target.value);
    

    return (
        <Card size="2" style={{ width: 425 }}>
            <Flex gap="" align="center">
                <Box width={"100%"}>
                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Enter Reward:
                            </Text>
                            <TextField.Input
                                placeholder="Enter Reward"
                                value={amount}
                                onChange={handleChange}
                            />
                        </label>
                        <Button onClick={handleStake}>
                            Stake into Pool
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    )
}

export default Stake;