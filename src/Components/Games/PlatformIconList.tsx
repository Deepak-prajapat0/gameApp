import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiAtari, SiCommodore, SiNeovim, SiNintendo, SiSega } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../../hooks/usePlatform";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms=[] }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
        "commodore-amiga": SiCommodore,
        sega: SiSega,
        "neo-geo": SiNeovim,
        atari: SiAtari
    }
    

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} title={platform.slug} color='white' />
            ))}
        </HStack>
    );
};

export default PlatformIconList;