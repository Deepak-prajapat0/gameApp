import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { TfiMenu } from 'react-icons/tfi';
import Aside from "../Sidebar/Aside";
import { AiOutlineClose } from "react-icons/ai";


function SideDrawer() {

   
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
                        <Aside/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export  default SideDrawer