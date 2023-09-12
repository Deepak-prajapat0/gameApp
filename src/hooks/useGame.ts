import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import { Platform } from "./usePlatform";

export interface Game {
    id: number;
    slug: string;
    name: string;
    description_raw: string;
    background_image: string;
    rating: number;
    ratings_count: number;
    genres: [{}];
    playtime: number
    parent_platforms: { platform: Platform }[];
    released: string;
    metacritic: number;
}


const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug)
});

export default useGame;