import { create } from 'zustand';
import { Platform } from './hooks/usePlatform';
import { Genre } from './hooks/useGenre';

interface GameQuery {
    genre?: Genre|null;
    platform?: Platform|null;
    sortOrder?: string;
    query?: string;
    pageNo?:number
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearch: (query: string) => void;
    setGenre: (genre: Genre|null) => void;
    setPlatform: (platform:Platform|null ) => void;
    setSortOrder: (sortOrder: string) => void;
    onPageScroll:(pageNo:number)=>void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {},
    setSearch: (query) =>
        set(() => ({ gameQuery: { query } })),
    setGenre: (genre) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, genre },
        })),
    setPlatform: (platform) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, platform },
        })),
    setSortOrder: (sortOrder) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, sortOrder },
        })),
    onPageScroll:(pageNo)=>
        set((store)=>({
            gameQuery:{...store.gameQuery,pageNo}
        }))
}));

export default useGameQueryStore;