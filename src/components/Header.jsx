import { Flex } from "@radix-ui/themes";


const Header = () => {
    return(
        <div>
            <Flex gap={"3"}>
                <h3>Staking Pool</h3>
                <w3m-button />
            </Flex>
        </div>
    );
}

export default Header;