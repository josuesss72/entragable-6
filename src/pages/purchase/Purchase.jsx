import React, {useEffect} from 'react'; 
import {useDispatch} from 'react-redux';
import {getUserPurchase} from '../../store/slice/purchase.slice';

const Purchase = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserPurchase())
  }, [])

  return (
    <div>
      <h1>Purchase</h1>
    </div>	
  )
}

export default Purchase 

