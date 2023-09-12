import { Box, Container, Heading } from '@chakra-ui/react'
import GameGrid from '../Components/Games/GameGrid';
import PlatformSelector from '../Components/PlatformSelector';
import SortSelector from '../Components/SortSelector';



export default function Home() {

  return (
    <main style={{width:"100%"}}>
        <Heading as='h2' size='3xl' margin={"0 0 1rem 13px"} >Top picks</Heading>
      <Box pl={4}>
        <PlatformSelector  />
        <SortSelector />
      </Box>
      <Container maxW={"container-lg"} >
        <GameGrid  />
      </Container>
    </main>
  )
}
