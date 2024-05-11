import React, { useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { LogoutUser, displayUser } from '../Redux/Userslice'
import { Link } from 'react-router-dom'
import { displayProduct } from '../Redux/Productslice'

const First = () => {

  const dispatch=useDispatch()

  const [state,setState]=useState([])

function display(){
  axios.get('https://jsonplaceholder.typicode.com/users').then((data)=>{
    dispatch(displayUser(data.data))
setState(data.data)
  })

}

const productData={
  Product:'Mobile',
  Brand:"Samsung",
  Model:"A73",
  Price:"380000"
}

const display1=()=>{
 dispatch(displayProduct(productData))
}

function Logout(){
 dispatch(LogoutUser())
}

  
  return (
    <div>
      <button onClick={display}>User Info</button>
      <br></br>
      <button onClick={display1}>Product Info</button>
      <br></br>
    <Link to={'/second'}>Connect to second page</Link>
    <br></br>
    <Link to={'/third'}>Connect to third page</Link>

    <button onClick={Logout}>Logout</button>
    </div>
  )
}
 
export default First