import React from 'react'; 
import {Outlet, Navigate}  from 'react-router-dom'

const RoutProtect = () => {

  if(localStorage.getItem('token')) {
    return (
      <Outlet/>
    )
  }else {
    return (
      <Navigate to='/login'/>
    ) 
  }
}

export default RoutProtect

