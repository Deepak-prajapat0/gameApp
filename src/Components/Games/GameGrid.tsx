import { SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import useGames, { Game } from '../../hooks/useGames'
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../../hooks/useGenre';
import { Platform } from '../../hooks/usePlatform';
import { GameQuery } from '../../App';


interface Props {
  gameQuery: GameQuery;
  query:string
}
const getFilteredGames = (query: string, data: Game[]) => {
  if (!query) {
    return data;
  }
  return data.filter(x => x.slug.includes(query))
}
export default function GameGrid({gameQuery,query}:Props) {
  const { data, isLoading } = useGames(gameQuery);
    const length = 15; // Specify the desired length of the array
    const skeletons = new Array(length).fill(null);

   
    const filteredGames = getFilteredGames(query,data)

  return (
      <SimpleGrid minChildWidth='18rem' spacing='10px'>
        {isLoading && skeletons.map((s,index) => <GameCardSkeleton key={index} />)}
      {filteredGames.map((game, index) =>
              <GameCard key={index} game={game} />
          )}
      </SimpleGrid>
  )
}
