import { Container, Heading } from '@chakra-ui/react'

import GameGrid from './GameGrid';

import { Genre } from '../hooks/useGenre';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}


export default function Home({selectedGenre}:Props) {
  return (
    <main style={{width:"100%"}}>
        <Heading as='h2' size='3xl' mr={"auto"} >New and Trending</Heading>
      <Container pt={6} maxW={"container-lg"} >
          <GameGrid selectedGenre={selectedGenre}/>
      </Container>
    </main>
  )
}
