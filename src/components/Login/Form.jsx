import React from 'react'; 
import { useForm } from 'react-hook-form' 
import axios from 'axios'
import { Link } from 'react-router-dom';

const Form = ({ isSuccess, setIsSuccess }) => {

  const { register, handleSubmit, reset } = useForm() 

  const submit = (data) => {
    axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
      .then(res => {
        console.log(res)
        const token = res.data.data.token
        localStorage.setItem('token', token)
        setIsSuccess(token) 
      })
      .catch(err => console.log(err))
    reset({
      email: '',
      password: ''
    })
  }

  return (
    <form className='box_login' onSubmit={ handleSubmit(submit) }>
      <h2>Welcome! Enter your email and password to continue</h2>
      <div className='test_data'>
        <h3>Test data</h3>
        <ul className='ul_test'>
          <li><i className='bx bx-envelope icon_login'></i>john@gmail.com</li>
          <li><i className='bx bx-lock icon_login'></i>john1234</li>
        </ul>
      </div>
      <div className='box_form'>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' {...register('email')}/>
      </div>
      <div className='box_form'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' {...register('password')}/>
      </div>
      <button className='btn_login'>Submit</button>
      <section className='sign_up'>
        <p>Don't have an account?</p>
        <Link>Sing Up</Link> 
      </section>
    </form>	
  )
}

export default Form 

