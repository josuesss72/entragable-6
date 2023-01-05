import React from 'react'; 
import Counter from './Counter';
import '../../css/Counter.css'
import useHandleCard from '../../hooks/useHandleCard';
import { useState } from 'react';

const Description = ({ productById }) => {

  const { addCard } = useHandleCard(productById)
  const [ isQuantity, setIsQuantity ] = useState()

  const handleClick = () => {
    addCard(isQuantity)
  }

  return (
    <section className='section_description'>
      <h4>{ productById?.title }</h4>
      <p>{ productById?.description }</p>
      <div className='box_price'>
        <b>$ { productById?.price }</b>
        <Counter setIsQuantity={ setIsQuantity } /> 
      </div>
      <button onClick={ handleClick } className='btn_description'>Add to cart</button>
    </section>	
  )
}

export default Description 

