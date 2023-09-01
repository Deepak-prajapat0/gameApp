import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

// {
//   added: 19963
//   added_by_status:{ yet: 513, owned: 11501, beaten: 5598, toplay: 595, dropped: 1048, … }
//   background_image  :  "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//   clip   :  null
//   dominant_color:"0f0f0f"
//   esrb_rating:{ id: 4, name: 'Mature', slug: 'mature' }
//   genres:(2)[{… }, {… }]
//   id:3498
//   metacritic: 92
//   name:"Grand Theft Auto V"
//   parent_platforms:(3)[{… }, {… }, {… }]
//   platforms:(7)[{… }, {… }, {… }, {… }, {… }, {… }, {… }]
//   playtime: 74
//   rating:4.47
//   rating_top: 5
//   ratings: (4)[{… }, {… }, {… }, {… }]
//   ratings_count:6503
//   released :"2013-09-17"
//   reviews_count:6600
//   reviews_text_count: 57
//   saturated_color:"0f0f0f"
//   short_screenshots:(7)[{… }, {… }, {… }, {… }, {… }, {… }, {… }]
//   slug:"grand-theft-auto-v"
//   stores:(5)[{… }, {… }, {… }, {… }, {… }]
//   suggestions_count:421
//   tags:(19)[{… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }]
//   tba:false
//   updated:"2023-08-31T08:28:41"
//   user_game : null
// }