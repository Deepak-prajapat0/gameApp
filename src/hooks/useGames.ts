import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../service/api-client";
import useGameQueryStore from "../store";
import { Game } from "./useGame";


const apiClient = new APIClient<Game>('/games');

const useGames = () =>{
    const gameQuery = useGameQueryStore(s=>s.gameQuery)
    
   return useInfiniteQuery<FetchResponse<Game>, Error>({
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
        staleTime: 172800000,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        }
    });
}
export default useGames;