import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import getConfig from '../utils/getConfig';
import {getUserCart} from '../store/slice/cart.slice';
import { useDispatch, useSelector } from 'react-redux';

export default function useHandleCard (product) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state)

  const handleClick = (e) => {
    const img = e.target.classList.contains('img_product')
    const title = e.target.classList.contains('title_product')
    if(img | title) {
      navigate(`/product/${product.id}`) 
      scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }  
  } 
  
  function updateQuantity () {
    const productQuantity = cart?.filter(x => {
      if(x.id === product.id){
        return x
      }
    })
    console.log(productQuantity)
    const data = {
      id: product.id,
      newQuantity: productQuantity[0].productsInCart.quantity + 1 
    }
    axios.patch('https://e-commerce-api.academlo.tech/api/v1/cart', data, getConfig())
      .then(res => {
        console.log(res)
        dispatch(getUserCart())
      })
      .catch(err => console.log(err))
  }

  function addCard (counter) {
    
    const data = {
      id: product.id,
      quantity: counter? counter : 1 
    }
    axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', data, getConfig())
      .then(res => {
        console.log(res)
        dispatch(getUserCart())
      })
      .catch(err => {
        console.log(err)
        updateQuantity() 
      })
  }

  return { handleClick, addCard }
}
