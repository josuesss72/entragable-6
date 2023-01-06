import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import Categories from './filter/Categories';
import Price from './filter/Price';

const Filter = ({ setProductsFilter, isShowFilter }) => {
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
    <aside className={`filter ${ isShowFilter? 'show_filter': '' }`}>
      <Price setProductsFilter={ setProductsFilter }/> 
      <Categories setProductsFilter={setProductsFilter} categorys={ categorys }/>
    </aside>	
  )
}

export default Filter 

