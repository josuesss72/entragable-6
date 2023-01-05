import React, {useEffect} from 'react'; 
import { useState } from 'react';


const Counter = ({setIsQuantity }) => {

  const [ counter, setCounter ] = useState(1)

  useEffect(() => {
    setIsQuantity(counter)
  }, [counter])

  const handleClickPlus = () => {
    setCounter(counter + 1)
  }
  const handleClickMin = () => {
    counter > 0? setCounter(counter - 1) : 0
  }
  
  

  return (
    <div className='counter'>
      <button className='btn_counter' onClick={ handleClickMin }>-</button>
      <div>{ counter }</div>
      <button className='btn_counter' onClick={ handleClickPlus }>+</button>
    </div>	
  )
}

export default Counter 

