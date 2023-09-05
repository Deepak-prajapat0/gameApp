import { Box, Container, Heading, Link, List, ListItem, VStack } from '@chakra-ui/react'
import GenreList from './GenreList'
import { Genre } from '../../hooks/useGenre';
import PlatformList from './PlatformList';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}


export default function Aside({ selectedGenre, onSelectGenre }: Props) {
  return (
    <Container display={{ minWidth: "400px" ? "none" : "block" }} w="16rem" minHeight="80vh" maxHeight="fit-content">
      <VStack textAlign={"left"}>
        <Box py={3} bg={"purple-200"} w="100%">
          <Link  py={1} w="100%" fontSize={28} fontWeight={600} cursor={"pointer"} _hover={{ color: "darkgray" }} >Home</Link>
        </Box>
        <Heading as="h6" py="3" w="100%" textAlign={"left"}>Genres</Heading>
        <GenreList selectedGenre={selectedGenre} onSelectGenre={onSelectGenre} />
        <PlatformList/>
      </VStack>
    </Container>
  )
}
