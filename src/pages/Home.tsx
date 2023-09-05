import { Container, Heading } from '@chakra-ui/react'

import GameGrid from '../Components/Games/GameGrid';

import { Genre } from '../hooks/useGenre';
import PlatformSelector from '../Components/PlatformSelector';
import { Platform } from '../hooks/usePlatform';
import SortSelector from '../Components/SortSelector';
import { GameQuery } from '../App';


interface Props {
  query:string;
  selectedGenre: Genre | null;
  gameQuery:GameQuery
  selectedPlatform: Platform | null;
  onSelectGenre: (genre: Genre) => void;
  onSelectedPlatform:(platform:Platform|null)=>void;
  onSelectSortOrder:(sortOrder:string)=>void
}


export default function Home({ gameQuery, selectedPlatform, onSelectedPlatform, onSelectSortOrder, query }:Props) {

  

  return (
    <main style={{width:"100%"}}>
        <Heading as='h2' size='3xl' mr={"auto"} >New and Trending</Heading>
      <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={onSelectedPlatform} />
      <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={onSelectSortOrder}   />
      <Container pt={6} maxW={"container-lg"} >
        <GameGrid query={query} gameQuery={gameQuery} />
      </Container>
    </main>
  )
}
