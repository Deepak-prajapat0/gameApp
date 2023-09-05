import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatform";



export interface Game {
    id: number;
    slug: string;
    name: string;
    background_image: string;
    rating: number;
    ratings_count: number;
    genres: [{}];
    playtime: number
    parent_platforms: { platform: Platform }[];
    released: string;
    metacritic:number;
}

const useGames = (gameQuery: GameQuery) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search:gameQuery.query
            },
        },
        [gameQuery]
    );

export default useGames;