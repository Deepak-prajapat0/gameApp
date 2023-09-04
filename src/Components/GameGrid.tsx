import { SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import useGames from '../hooks/useGames'
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenre';


interface Props {
  selectedGenre: Genre | null
}
export default function GameGrid({selectedGenre}:Props) {
    const { data, isLoading } = useGames(selectedGenre);
    const length = 15; // Specify the desired length of the array
    const skeletons = new Array(length).fill(null);

  return (
      <SimpleGrid minChildWidth='18rem' spacing='10px'>
        {isLoading && skeletons.map((skeleton,index) => <GameCardSkeleton key={index} />)}
          {data.map((game, index) =>
              <GameCard key={index} game={game} />
          )}
      </SimpleGrid>
  )
}
