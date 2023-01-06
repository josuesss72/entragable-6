import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const Header = ({ setIsShowCart, isShowCart, setShowFilter}) => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    if(e.target.classList.contains('bx-cart')) {
      setIsShowCart(!isShowCart)  
      setShowFilter(false)
    }
    if(e.target.classList.contains('bxs-user')) {
      navigate('/login')
    }
    if(e.target.classList.contains('bxs-store-alt')) {
      navigate('/purchase')
    }
  }

  const handleClickTitle = () => {
    navigate('/') 
  }

  return (
    <header className='header'>
      <h1 onClick={ handleClickTitle }>e-commerce</h1>
      <ul onClick={ handleClick } className='menu'>
        <li><i className='bx bxs-user icon_hd'></i></li>
        <li><i className='bx bxs-store-alt icon_hd'></i></li>
        <li><i className='bx bx-cart icon_hd'></i></li>
      </ul>
    </header>	
  )
}

export default Header 

