import React, {useEffect, useState} from 'react'; 
import { useSelector } from 'react-redux';
import useSimilarItems from '../../hooks/useSimilarItems';
import CardProduct from '../CardProduct';

const SimilarItems = ({ productById }) => {
  const { products } = useSelector(state => state)
  const [ similarProducts, setSimilarProducts ] = useState()
  const { filterSimilarProducts } = useSimilarItems()

  useEffect(() => {
    if(productById && products) {
      setSimilarProducts(filterSimilarProducts(products, productById))
    }
  }, [products, productById])


  return (
    <section className='section_similar_items'>
      <h2>Discover similar items</h2>
      <div className='container_similar_product'>
        {
          similarProducts?.map(product =>{
            if(product.title !== productById.title){
              return(
                <CardProduct 
                  id={ product.id }
                  product={ product } 
                  key={ product.id }
                />
              ) 
            } 
          })
        }
      </div>
    </section>	
  )
}

export default SimilarItems

