import React from 'react'; 
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../store/slice/Products.slice';

const Categories = ({ categorys }) => {
  
  const dispatch = useDispatch()

  const handleClick = (e) => {
    const idCategory = e.target.id 
    dispatch(getAllProducts(idCategory))
  }

  return (
    <section className='section_filter'>
      <ul className='box_filter'>
        <h3>Category</h3>
        {
          categorys?.map(category => {
            return (
              <li className='category' onClick={ handleClick } id={category.id} key={category.id}>{category.name}</li>
            )
          })
        }
      </ul>
    </section>	
  )
}

export default Categories 

