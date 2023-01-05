import React from 'react'; 

const Success = ({ isSuccess, setIsSuccess }) => {

  const handleClick = () => {
    localStorage.removeItem('token')
    setIsSuccess(false) 
  }

  return (
    <div className='success'>
      <div className='circle_grey'>
        <i className='bx bxs-user icon_user' ></i>
      </div>
      <p onClick={ handleClick } className='log_out'>Log out</p> 
    </div>	
  )
}

export default Success 

