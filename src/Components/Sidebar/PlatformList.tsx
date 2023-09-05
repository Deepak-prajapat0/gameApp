import { HStack, Heading, Icon, Image, Skeleton, Text, VStack } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import usePlatform, { Platform } from '../../hooks/usePlatform';
import getCroppedImageUrl from '../../service/image-url';

interface Props{
    onSelectedPlatform:(platform:Platform)=>void;
}


export default function PlatformList({onSelectedPlatform}:Props) {
    const { data, isLoading } = usePlatform();
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

    const length = 8;
    const skeleton = new Array(length).fill(null)

    if (isLoading) return <>{skeleton.map((x, index) => <Skeleton key={index} width={"100%"} height="20px" p={4} />)}</>;

    return (
        <VStack marginY={1} pt="2" width={"100%"} alignItems="flex-start" >
            <Heading as="h6" py="3">Platforms</Heading>
            {data.slice(0,8).map((platform) => (
                <HStack key={platform.id} alignItems="center" gap="5px" p="1">
                    <Icon as={iconMap[platform.slug]} h="2rem" w="2rem" p="1" borderRadius={5} _hover={{bg:"white",color:"black"}} transition={"all .2s"} color='white' />
                    <Text noOfLines={1} onClick={() => onSelectedPlatform(platform)}>{platform.name.split(' ')[0]}</Text>
                </HStack>
            ))}
        </VStack>
    );
}
