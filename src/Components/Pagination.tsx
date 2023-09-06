import { useState } from 'react'
import { GameQuery } from '../App';

interface Props{
    gameQuery:GameQuery;
    onSelectedPage:(pageNo:number)=>void
}

export default function Pagination({onSelectedPage}:Props) {
    const [count, setCount] = useState(2);
    function updateData() {
        setCount(count + 1)
        onSelectedPage(count)
    }

    
  return (
      <button onClick={() => updateData()}>load more{count - 1}</button>
  )
}
