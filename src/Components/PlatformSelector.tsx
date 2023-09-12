import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatform";
import useGameQueryStore from "../store";




const PlatformSelector = () => {
    const setPlatform = useGameQueryStore(s=>s.setPlatform);
    const selectedPlatform = useGameQueryStore(s=>s.gameQuery.platform)
    const { data } = usePlatforms();
    return (
        <Menu >
            <MenuButton mr={2} as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform ? selectedPlatform.name : "Platforms"}
            </MenuButton>
            <MenuList height={"20rem"} overflowY="scroll">
                <MenuItem onClick={() => setPlatform(null)}>All</MenuItem>
                {data.map(platform => <MenuItem key={platform.id} onClick={() => setPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;