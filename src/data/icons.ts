import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { FaAndroid, FaApple, FaLinux, FaWindows, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiCommodore, SiSega, SiNeovim, SiAtari } from "react-icons/si";

export const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
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