import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../service/api-client";
import { Platform } from "./usePlatform";


const apiClient = new APIClient<Game>('/games');


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
    metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.query,
                    page: pageParam
                },
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        }
    });
export default useGames;