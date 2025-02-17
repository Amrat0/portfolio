import React, { useEffect, useState } from 'react'
import './Login.css'
import { Button, Typography } from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../actions/user'
import {useAlert} from 'react-alert'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
const Login = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const dispatch= useDispatch()
    const alert =useAlert()
    const {loading,message, error}=useSelector(state=>state.login)

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(login(email,password))
    }
    useEffect(()=>{
   if(error){
     alert.error(error)
     dispatch({type: "CLEAR_ERRORS"})
   }
   if(message){
     alert.success(message)
     dispatch({type: "CLEAR_MESSAGE"})
   }
    },[alert,error,message,dispatch])
  return (
    <>
    <div className="login">
   
      <Header/>
        <div className="loginContainer">
            <form className='loginForm' onSubmit={submitHandler}>
                <Typography variant='h4'>
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p >N</p>

                </Typography>
                <div>
                    <input type='email' placeholder='Admin Email' value={email}  onChange={(e)=>setEmail(e.target.value)} required/>
                    <input type='password' placeholder='Admin Password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
                <Button type='submit' variant='contained'
                disabled={loading}
                >Login</Button>
                </div>

            </form>
            
        </div>
    </div>
        <Footer/>
    </>
  )
}

export default Login