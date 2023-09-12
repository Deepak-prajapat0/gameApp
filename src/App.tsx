import './App.css'
import { Genre } from './hooks/useGenre'
import { Platform } from './hooks/usePlatform'


export interface GameQuery {
  query:string;
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  pageNo:number
}


function App() {

  return (
    <div className='App'>
    </div>
  )
}

export default App
