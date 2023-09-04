import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}


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

const useGames = (selectedGenre: Genre | null) =>
    useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
        selectedGenre?.id,
    ]);

export default useGames;