import './App.css'
import Header from './Components/Header'
import Home from './pages/Home'
import Aside from './Components/Sidebar/Aside'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import { Platform } from './hooks/usePlatform'
import { HStack, Show } from '@chakra-ui/react'

export interface GameQuery {
  query:string;
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}


function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [query, setQuery] = useState('');
  return (
    <div className='App'>
      <Header onSearch={(query) => setGameQuery({ ...gameQuery, query })} />
      <HStack style={{minHeight:"90vh",display:"flex",flexDirection:"row",alignItems:"flex-start" ,color:"white"}}>
        <Show above='md'>
          <Aside selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        </Show>
        <Home gameQuery={gameQuery} selectedGenre={gameQuery.genre} selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
      </HStack>
    </div>
  )
}

export default App
