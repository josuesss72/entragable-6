import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import axios from 'axios';
import getConfig from '../utils/getConfig';
import {getUserCart} from '../store/slice/cart.slice';

const Cart = ({ isShowCart }) => {

  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()

  const handleCheckout = () => {
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post('https://e-commerce-api.academlo.tech/api/v1/purchases', data,getConfig()) 
      .then(res => {
        console.log(res.data)
        dispatch(getUserCart())
      })
      .catch(err => console.log(err))
  }


  return (
    <aside className={ `cart ${ isShowCart && 'show_cart'}` }>
      <header className='cart_header'>
        <h2>Cart Products</h2> 
      </header>
      <main className='container_cart'>
        {
          cart?.map(product => (
            <CartProduct key={ product.id } x={ product }/> 
          ))
        } 
      </main>
      <footer className='footer_cart'>
        <p className='tx_total'>
          Total: 
          <span className='price_cart'>
            {
              cart?
                cart.reduce((acum, el) =>{
                  return el.price * el.productsInCart.quantity + acum 
                }, 0)
              :
                0
            }
          </span>
        </p>
        <button onClick={ handleCheckout } className='btn_check'>Checkout</button>
      </footer>
    </aside>	
  )
}

export default Cart 

