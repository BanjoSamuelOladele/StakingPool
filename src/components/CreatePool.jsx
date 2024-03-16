import { useState } from "react";
import useCreatePool from "../hooks/useCreatePool";
import { Button, Card, Flex, Text, TextField } from "@radix-ui/themes";


const CreatePool = () => {
    const [reward, setReward] = useState("");

    const createPool = useCreatePool(reward);

    const handleOnChange = (e) => setReward(e.target.value);

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
                                value={reward}
                                onChange={handleOnChange}
                            />
                        </label>
                        <Button onClick={createPool}>
                            Create Pool
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    )
}

export default CreatePool;