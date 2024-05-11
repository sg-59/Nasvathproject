import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeProduct } from '../Redux/Productslice';


const Second = () => {

  const dispatch=useDispatch()

  const Items=useSelector((state)=>state.Product.ProductDetails)
  console.log("Items ...........",Items);

  function RemovedData(){
   dispatch(removeProduct())
  }

  return (
    <div>
       <h1>{Items?.Product}</h1>
       <h1>{Items?.Model}</h1>
       <h1>{Items?.Price}</h1>
       <h1>{Items?.Brand}</h1>
       <button onClick={RemovedData}>Remove Data</button>
    </div>
  )
}

export default Second