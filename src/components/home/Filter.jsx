import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import Categories from './filter/Categories';

const Filter = () => {
  const [ categorys, setCategorys ] = useState() 

  useEffect(() => {
    getCategory()
  }, [])

  function getCategory () {
    axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories', getConfig()) 
      .then(res => setCategorys(res.data.data.categories))
      .catch(err => console.log(err))
  }

  return (
    <aside className='filter'>
      <section className='section_filter'>
        <ul className='box_filter'>
          <h3>Price</h3>
          <li className='box_input'>
            <label htmlFor='from'>From</label>
            <input name='from' type='text'></input>
          </li> 
          <li className='box_input'>
            <label htmlFor='to'>To</label>
            <input name='to' type='text'></input>
          </li>
        </ul>
      </section> 
      <Categories categorys={ categorys }/>
    </aside>	
  )
}

export default Filter 

