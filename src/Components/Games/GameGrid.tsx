import { SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import useGames from '../../hooks/useGames'
import GameCardSkeleton from './GameCardSkeleton';
import { GameQuery } from '../../App';
// import { useEffect, useState } from 'react';


interface Props {
  gameQuery: GameQuery;
}

export default function GameGrid({gameQuery}:Props) {
  const { data, isLoading } = useGames(gameQuery);
    const length = 15; // Specify the desired length of the array
    const skeletons = new Array(length).fill(null);

  return (
      <SimpleGrid minChildWidth='15rem' spacing='10px' p="1" py='4' >
        {isLoading && skeletons.map((s,index) => <GameCardSkeleton key={s||index} />)}
      {data.map((game, index) =>
              <GameCard key={index} game={game} />
          )}
      </SimpleGrid>
  )
}
