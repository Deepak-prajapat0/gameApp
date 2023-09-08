import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../../hooks/usePlatform";
import { iconMap } from "../../data/icons";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms=[] }: Props) => {
 
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} title={platform.slug} color='white' />
            ))}
        </HStack>
    );
};

export default PlatformIconList;