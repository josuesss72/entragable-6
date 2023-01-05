import React, {useEffect} from 'react'; 
import Form from '../../components/Login/Form';
import Success from '../../components/Login/Success';
import '../../css/Success.css'
import { useState } from 'react';
import {getUserCart} from '../../store/slice/cart.slice';
import { useDispatch } from 'react-redux';

const Login = () => {

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const [ isSuccess, setIsSuccess ] = useState(token) 
  
  useEffect(()=>{
    if(isSuccess) {
      dispatch(getUserCart())
    }
  },[isSuccess])
  
  return (
    <div className='login'>
      {
        isSuccess?
          <Success setIsSuccess={ setIsSuccess } isSuccess={ isSuccess }/>
        :
          <Form setIsSuccess={ setIsSuccess } isSuccess={ isSuccess }/>
      }
    </div>	
  )
}

export default Login 

