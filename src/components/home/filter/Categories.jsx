import React from 'react'; 
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../store/slice/Products.slice';

const Categories = ({ categorys, setProductsFilter }) => {
  
  const dispatch = useDispatch()

  const handleClick = (e) => {
    setProductsFilter()
    const idCategory = e.target.id 
    if(e.target.classList.contains('category')){
      if(e.target.id === '0'){ 
        dispatch(getAllProducts()) 
      }else {
        dispatch(getAllProducts(idCategory))
      }
    }
  }

  return (
    <section className='section_filter'>
      <ul onClick={ handleClick } className='box_filter box_category'>
        <h3>Category</h3>

        <div>
          <li className='category' id='0'>All products</li>
          {
            categorys?.map(category => {
              return (
                <li className='category'  id={category.id} key={category.id}>{category.name}</li>
              )
            })
          }
        </div> 
      </ul>
    </section>	
  )
}

export default Categories 

