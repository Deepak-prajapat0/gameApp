import { Badge, Box, Button, HStack, Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import PlatformIconList from '../Components/Games/PlatformIconList';

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <Box width="100%" height="100%">
            <HStack gap="4">
                <Badge bg="white" color="black">{new Date(game.released).toDateString()}</Badge>
                <PlatformIconList platforms={game.parent_platforms.map(x => x.platform)} />
                <Text fontSize={14}>Average Playtime: {game.playtime} hours</Text>
            </HStack>
                <Heading as="h2" fontWeight="bold" py="3" size="3xl">{game.name}</Heading>
               <Button p="6" py="7" display="flex" flexDirection="column" alignItems="flex-start" gap="1" bg="white" color="black" >
                <span style={{fontSize:"14px", fontWeight:200}} >Add to</span>
                <span>My games</span>
               </Button>
        </Box>
    )
}

export default GameDetailPage