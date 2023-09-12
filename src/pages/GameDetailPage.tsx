import { Badge, Box, HStack, Heading, Spinner, Text } from '@chakra-ui/react';
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
                <Badge bg="white" color="black">{game.released}</Badge>
                <PlatformIconList platforms={game.parent_platforms.map(x => x.platform)} />
                <Text fontSize={14}>Average Playtime: {game.playtime} hours</Text>
            </HStack>
                <Heading as="h2" fontWeight="bold" py="3" size="3xl">{game.name}</Heading>
        </Box>
    )
}

export default GameDetailPage