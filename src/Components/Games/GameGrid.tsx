import { Box, HStack, SimpleGrid, Spinner } from '@chakra-ui/react';
import GameCard from './GameCard';
import useGames from '../../hooks/useGames';
import GameCardSkeleton from './GameCardSkeleton';
import React, { useEffect } from 'react';
import { GameQuery } from '../../App';


interface Props {
  gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  const { data, isLoading,isFetchingNextPage, fetchNextPage } = useGames(gameQuery);
  const length = 15;
  const skeletons = new Array(length).fill(null);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchNextPage();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <Box>
      <SimpleGrid minChildWidth='15rem' spacing='10px' p="1" py='4' >
        {isLoading && skeletons.map((s, index) => <GameCardSkeleton key={s || index} />)}
       {data?.pages.map((page,index)=>
        <React.Fragment key={index}>
          {page.results.length === 0 && <h2>NO games Found</h2>}
          {page.results.map((game, index) =>
            <GameCard key={index} game={game} />
          )}
        </React.Fragment>
       )}
      </SimpleGrid>
      <HStack m={50} p={50} justifyContent="center"> {isFetchingNextPage && <Spinner mx="auto" size='xl' />}</HStack>
    </Box>
  )
}
