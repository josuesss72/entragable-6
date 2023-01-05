import React from 'react'; 
import useHandleCard from '../hooks/useHandleCard';

const CardProduct = ({ product, id }) => {

  const { handleClick, addCard } = useHandleCard(product)

  const handleClickBtn = (e) => {
    e.stopPropagation()
    addCard() 
  }

  return (
    <article id={id} onClick={handleClick} className='product'>
      <header className='header_product'>
        <img className='img_product' src={ product.productImgs[0] }/>
        <img className='img_product' src={ product.productImgs[1] } alt=''/>
      </header>
      <section className='info_product'>
        <h3 className='title_product' >{ product.title.split(' ').slice(0,8).join(' ') }</h3> 
        <div className='box_compra'>
          <ul className='container_price'>
            <span className='text_price'>price</span>
            <li>
              { product.price }
            </li>
          </ul>
          <button onClick={ handleClickBtn } className='btn_product'>
            <i className='bx bx-cart icon'></i>
          </button>
        </div> 
      </section>
    </article>	
  )
}

export default CardProduct
