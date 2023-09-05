import { Container, Heading } from '@chakra-ui/react'

import GameGrid from '../Components/Games/GameGrid';

import { Genre } from '../hooks/useGenre';
import PlatformSelector from '../Components/PlatformSelector';
import { Platform } from '../hooks/usePlatform';


interface Props {
  query:string;
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  onSelectGenre: (genre: Genre) => void;
  onSelectedPlatform:(platform:Platform)=>void;
}


export default function Home({ selectedGenre, selectedPlatform, onSelectedPlatform,query}:Props) {

  

  return (
    <main style={{width:"100%"}}>
        <Heading as='h2' size='3xl' mr={"auto"} >New and Trending</Heading>
      <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={onSelectedPlatform} />
      <Container pt={6} maxW={"container-lg"} >
        <GameGrid query={query} selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
      </Container>
    </main>
  )
}
