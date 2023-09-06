import { Box, Container, Heading } from '@chakra-ui/react'

import GameGrid from '../Components/Games/GameGrid';

import { Genre } from '../hooks/useGenre';
import PlatformSelector from '../Components/PlatformSelector';
import { Platform } from '../hooks/usePlatform';
import SortSelector from '../Components/SortSelector';
import { GameQuery } from '../App';
// import Pagination from '../Components/Pagination';
import { useEffect, useState } from 'react';


interface Props {
  selectedGenre: Genre | null;
  gameQuery:GameQuery
  selectedPlatform: Platform | null;
  onSelectGenre: (genre: Genre) => void;
  onSelectedPlatform:(platform:Platform|null)=>void;
  onSelectSortOrder:(sortOrder:string)=>void
  onPageScroll:(pageNo:number)=>void;
}


export default function Home({ gameQuery, selectedPlatform, onSelectedPlatform, onSelectSortOrder ,onPageScroll}:Props) {
  const [page, setPage] = useState(2)

  function updateData() {
    setPage(prev => prev + 1)
    onPageScroll(page)
  }

  function handleScroll() {
    if (window.innerHeight - document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setPage(prev => prev + page)
      updateData()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    console.log("hlo");

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <main style={{width:"100%"}}>
        <Heading as='h2' size='3xl' margin={"0 0 1rem 13px"} >New and Trending</Heading>
      <Box pl={4}>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={onSelectedPlatform} />
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={onSelectSortOrder} />
      </Box>
      <Container pt={6} maxW={"container-lg"} >
        <GameGrid gameQuery={gameQuery} />
      </Container>
      {/* <Pagination gameQuery={gameQuery} onSelectedPage={onSelectedPage}/> */}
    </main>
  )
}
