import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeUser } from '../Redux/Userslice'

const Third = () => {

  const dispatch=useDispatch()

  const ApidatafromFirst=useSelector((state)=>state.user.userInfo[0])
  console.log("Final answer get it",ApidatafromFirst);


  function remove(){
dispatch(removeUser())
  }

  return (
    <div>
    {ApidatafromFirst&&ApidatafromFirst.map((li)=>(
      <h1>{li.name}</h1>
    ))}
    <button onClick={remove}>Remove</button>
    </div>
  )
}

export default Third
