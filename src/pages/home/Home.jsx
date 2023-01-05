import React from 'react'; 
import { useSelector } from 'react-redux';
import CardProduct from '../../components/CardProduct';
import '../../css/CardProduct.css'
import { useState } from 'react';
import Filter from '../../components/home/Filter';
import '../../css/Filter.css'

const Home = () => {
  const { products } = useSelector(state => state)
  const [ filterSearch, setFilterSearch ] = useState()

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase().trim()
    const filter = products?.filter((x) => {
      const title = x.title.toLowerCase()
      if(title.includes(value)){
        return x
      }
    })
    setFilterSearch(filter)
  }

  return (
    <div className='home'>
      <Filter/> 
      <div className='main'>
        <section className='box_search'>
          <input onChange={handleChange} className='input_search' type='text'/>
          <button className='btn_search'>🔍</button>
        </section>
        <section className='container_products'>
          {
            filterSearch?
              filterSearch?.map(x => (
                <CardProduct key={x.id} product={x}/>
              ))
            :
              products?.map(x => (
                <CardProduct key={x.id} product={x}/>
              ))
          } 
        </section>
      </div>
    </div> 
  )
}

export default Home 

