import React from 'react'; 
import axios from 'axios';
import getConfig from '../utils/getConfig';
import {getUserCart} from '../store/slice/cart.slice';
import {useDispatch} from 'react-redux';

const CartProduct = ({ x }) => {
  
  const dispatch = useDispatch()

  const handleClick = () => {
    delProductCart(x.id) 
  }
  
  function delProductCart (id) {
    axios.delete(`https://e-commerce-api.academlo.tech/api/v1/cart/${ id }`, getConfig()) 
      .then(res => {
        console.log(res)
        dispatch(getUserCart())
      })
      .then(err => console.log(err))
  }
  
  return (
    <div  className='product_cart'>
      <ul className='info_product_cart'>
        <li className='sub'>{ x.brand }</li>
        <li className='title'>{ x.title }</li>
        <li className='quantity'>{ x.productsInCart.quantity }</li>
      </ul>
      <span className='sub'>
        <button className='btn_del' onClick={ handleClick }><i className='bx bx-trash'></i></button>
        <b className='price'><span className='sub'>Total:</span> { x.price }</b>
      </span>
    </div>	
  )
}

export default CartProduct 

