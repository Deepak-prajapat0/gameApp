import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { TfiMenu } from 'react-icons/tfi';
import { Genre } from "../../hooks/useGenre";
import Aside from "../Sidebar/Aside";
import { Platform } from "../../hooks/usePlatform";
import { AiOutlineClose } from "react-icons/ai";

interface Props{
    selectedGenre:Genre|null;
    onSelectGenre:(genre:Genre)=>void;
    onSelectedPlatform:(platform:Platform)=>void;
}

function SideDrawer({ selectedGenre, onSelectGenre, onSelectedPlatform }:Props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <button title="Open" onClick={onOpen} >
                <TfiMenu/>
            </button>
            <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent maxWidth="fit-content" >
                    <DrawerHeader borderBottomWidth='1px'><span title="close" onClick={onClose}><AiOutlineClose /></span></DrawerHeader>
                    <DrawerBody>
                        <Aside selectedGenre={selectedGenre} onSelectGenre={onSelectGenre} onSelectedPlatform={onSelectedPlatform}/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export  default SideDrawer