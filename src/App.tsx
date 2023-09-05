import './App.css'
import Header from './Components/Header'
import Home from './pages/Home'
import Aside from './Components/Sidebar/Aside'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import { Platform } from './hooks/usePlatform'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}


function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [query, setQuery] = useState('');
  return (
    <div className='App'>
      <Header setQuery={setQuery} />
      <div style={{minHeight:"90vh",display:"flex",flexDirection:"row" ,color:"white"}}>
        <Aside selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        <Home query={query} gameQuery={gameQuery} selectedGenre={gameQuery.genre} selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
      </div>
    </div>
  )
}

export default App
