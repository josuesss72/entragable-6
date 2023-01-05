import React, {useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Description from '../../components/infoProduct/Description';
import '../../css/Description.css'
import Slider from '../../components/infoProduct/Slider';
import '../../css/Slider.css'
import SimilarItems from '../../components/infoProduct/SimilarItems';
import '../../css/SimilarItems.css'
import useGetProductById from '../../hooks/useGetProductById';

const InfoProduct = () => {

  const { id } = useParams()
  const [productById, setProductById] = useState()
  const { getProductById } = useGetProductById()

  useEffect(() => {
    getProductById(setProductById, id)
  }, [id])


 // console.log(productById)

  return (
    <article className='box_infoProducts'>
      <p>{ productById?.title }</p>
      <div className='grid_infoProduct'>
        <Slider productById={ productById }/> 
        <Description productById={productById}/>
        <SimilarItems productById={ productById }/>
      </div> 
    </article>	
  )
}

export default InfoProduct

