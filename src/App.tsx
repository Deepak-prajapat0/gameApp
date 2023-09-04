import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Aside from './Components/Aside'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <div className='App'>
      <Header />
      <div style={{minHeight:"90vh",display:"flex",flexDirection:"row" ,color:"white"}}>
        <Aside selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        <Home selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </div>
    </div>
  )
}

export default App
