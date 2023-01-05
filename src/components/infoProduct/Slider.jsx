import React from 'react'; 

const Slider = ({ productById }) => {
  return (
    <section className='slider'>
      <button className='btn_slider'>⬅</button>
      <img className='img_slider' src={ productById?.productImgs[0] }/>
      <button className='btn_slider'>➡</button>
    </section>	
  )
}

export default Slider 

