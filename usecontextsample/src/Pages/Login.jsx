import React, { useState } from 'react'
import { LoginUser } from '../Redux/Userslice';
import { useDispatch } from 'react-redux';

const Login = () => {


    const dispatch=useDispatch()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    function display(){
console.log(email,password);
dispatch(LoginUser(email))
    }
  return (
    <div>
     <input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
     <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>

     <button onClick={display}>Login</button>
    </div>
  )
}

export default Login
