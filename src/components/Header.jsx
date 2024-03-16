import { Flex } from "@radix-ui/themes";


const Header = () => {
    return(
        <div className="flex justify-between items-center">
            Staking Pool
            <Flex justify={"between"} direction={"row"} display={"inline-flex"} align={"center"} gap={"7"}>
                <w3m-button />
            </Flex>
        </div>
    );
}

export default Header;