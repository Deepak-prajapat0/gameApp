import useData from "./useData";
import { Genre } from "./useGenre";
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

const useGames = (
    selectedGenre: Genre | null,
    selectedPlatform: Platform | null
) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: selectedGenre?.id,
                platforms: selectedPlatform?.id,
            },
        },
        [selectedGenre?.id, selectedPlatform?.id]
    );


export default useGames;