import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import './css/Home.css'
import { useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import { getAllProducts } from './store/slice/Products.slice'
import InfoProduct from './pages/infoProduct/InfoProduct'
import './css/InfoProduct.css'
import Login from './pages/login/Login'
import './css/Login.css'
import RoutProtect from './components/RoutProtect'
import {getUserCart} from './store/slice/cart.slice'
import Header from './components/Header'
import './css/Header.css'
import Cart from './components/Cart'
import './css/Cart.css'
import Footer from './components/Footer'
import './css/Footer.css'
import Purchase from './pages/purchase/Purchase'

function App() {
  const dispatch = useDispatch()
  const [ isShowCart, setIsShowCart ] = useState(false)

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getUserCart())
  },[dispatch])
  
  return (
    <div className="App">
      <Header setIsShowCart={ setIsShowCart } isShowCart={ isShowCart }/>     
      {
        localStorage.getItem('token')?
          <Cart isShowCart={ isShowCart }/>
        :
          ''
      } 
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/product/:id' element={ <InfoProduct/> }/>
        <Route path='/login' element={ <Login/> }/>
        
        <Route element={ <RoutProtect/> }>
          <Route path='/purchase' element={<Purchase/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
