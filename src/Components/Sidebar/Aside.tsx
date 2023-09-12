import { Box, Container, Heading,VStack } from '@chakra-ui/react'
import GenreList from './GenreList'
import PlatformList from './PlatformList';
import { Link } from 'react-router-dom';




export default function Aside() {
  return (
    <Container w="16rem" p="3" pt="14" minHeight="80vh" maxHeight="fit-content" >
      <VStack textAlign={"left"}>
        <Box py={3} bg={"purple-200"} w="100%">
          {/* py={1} w="100%" fontSize={28} fontWeight={600} cursor={"pointer"} _hover={{ color: "darkgray" }} */}
          <Link to='/'  >Home</Link>
        </Box>
        <Heading as="h6" py="3" w="100%" textAlign={"left"}>Genres</Heading>
        <GenreList />
        <PlatformList />
      </VStack>
    </Container>
  )
}
