import './App.css'
import Header from './Components/Header'
import Home from './pages/Home'
import Aside from './Components/Sidebar/Aside'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import { Platform } from './hooks/usePlatform'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [query, setQuery] = useState('');
  return (
    <div className='App'>
      <Header setQuery={setQuery} />
      <div style={{minHeight:"90vh",display:"flex",flexDirection:"row" ,color:"white"}}>
        <Aside selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        <Home query={query} selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </div>
    </div>
  )
}

export default App
