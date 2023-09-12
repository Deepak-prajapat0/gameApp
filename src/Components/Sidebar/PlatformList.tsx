import { HStack, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import usePlatform from '../../hooks/usePlatform';
import { iconMap } from '../../data/icons';
import useGameQueryStore from '../../store';


export default function PlatformList() {
    const setPlatform = useGameQueryStore(s => s.setPlatform)
    const { data } = usePlatform();

    return (
        <VStack marginY={1} pt="2" width={"100%"} alignItems="flex-start" >
            <Heading as="h6" py="3">Platforms</Heading>
            {data.map((platform) => (
                <HStack key={platform.id} width="100%" alignItems="center" gap="3px" _hover={{ bg: "#222121" }} >
                    <Icon as={iconMap[platform.slug]} h="2rem" w="2rem" p="1" borderRadius={5} _hover={{bg:"white",color:"black"}} transition={"all .2s"} color='white' />
                    <Text noOfLines={1} onClick={() => setPlatform(platform)}>{platform.name.split(' ')[0]}</Text>
                </HStack>
            ))}
        </VStack>
    );
}
