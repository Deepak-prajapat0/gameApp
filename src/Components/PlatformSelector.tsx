import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatform";


interface Props {
    selectedPlatform: Platform | null;
    onSelectedPlatform: (platform: Platform|null) => void;
}

const PlatformSelector = ({selectedPlatform,onSelectedPlatform}:Props) => {
    const { data } = usePlatforms();
    return (
        <Menu>
            <MenuButton mr={2} as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform ? selectedPlatform.name : "Platforms"}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onSelectedPlatform(null)}>All</MenuItem>
                {data.map(platform => <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;