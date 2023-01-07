import React from 'react'; 
import { useSelector } from 'react-redux';
import CardProduct from '../../components/CardProduct';
import '../../css/CardProduct.css'
import { useState } from 'react';
import Filter from '../../components/home/Filter';
import '../../css/Filter.css'

const Home = ({ isShowFilter, setShowFilter, setIsShowCart}) => {
  const { products } = useSelector(state => state)
  const [ productsFilter, setProductsFilter ] = useState()

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase().trim()
    const filter = products?.filter((x) => {
      const title = x.title.toLowerCase()
      if(title.includes(value)){
        return x
      }
    })
    setProductsFilter(filter)
  }
  const handleClick = () => {
    setShowFilter(!isShowFilter) 
    setIsShowCart(false)
  }

  productsFilter && console.log(productsFilter)

  return (
    <div className='home'>
      <Filter isShowFilter={ isShowFilter } setShowFilter={setShowFilter} setProductsFilter={ setProductsFilter }/> 
      <div className='main'>
        <section className='box_search'>
          <input onChange={handleChange} className='input_search' type='text'/>
          <button className='btn_search'>🔍</button>
        </section>
        <button onClick={ handleClick } className='btn_show_filter'>
          <i className='bx bx-filter-alt' ></i>
          Filters
        </button>
        <section className='container_products'>
          {
            productsFilter?
              productsFilter?.map(x => (
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

