import React, {useEffect} from 'react'; 
import {useDispatch, useSelector} from 'react-redux';
import {getUserPurchase} from '../../store/slice/purchase.slice';
import Table from '../../components/purchase/Table';
import Loding from '../../components/Loding'; 

const Purchase = () => {

  const dispatch = useDispatch()
  const { purchase } = useSelector(state => state)

  useEffect(() => {
    dispatch(getUserPurchase())
  }, [])

  console.log(purchase)

  return (
    <main className='purchase'>
      {
        purchase?
          <section className='container_purchases'>
            {
              purchase?.map(purchase => (
                <Table 
                  key={ purchase.id }
                  purchase={ purchase }
                />	
              ))
            }
          </section>
        :
          <Loding/>
      } 
    </main> 
  )
}

export default Purchase 

