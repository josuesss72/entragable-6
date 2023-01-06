import React from 'react'; 
import { useSelector } from 'react-redux';


const Price = ({ setProductsFilter }) => {

  const { products } = useSelector(state => state)

  const submit = (e) => {
    e.preventDefault()
    const prices = {from: e.target.from.value, to: e.target.to.value}
    setProductsFilter(filterPrice(products, prices)) 
  }
  
  function filterPrice (products, prices) {
    const filterProductsByPrice = products?.filter(product => {
      if(product.price >= prices.from && product.price <= prices.to){
        return product
      }
    })
    return filterProductsByPrice
  }

  return (
    <section className='section_filter'>
      <form onSubmit={ submit } className='box_filter'>
        <h3>Price</h3>
        <div className='box_input'>
          <label htmlFor='from'>From</label>
          <input id='from' type='number'/>
        </div> 
        <div className='box_input'>
          <label htmlFor='to'>To</label>
          <input id='to' type='number'/>
        </div>
        <button className='btn_price_filter'>Appy</button>
      </form>
    </section>	
  )
}

export default Price 

