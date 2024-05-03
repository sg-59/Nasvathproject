import React, { useContext } from 'react'
import Second from './Second'
import { Appcontext } from './Context1'

const First = () => {

    const {dispatch}=useContext(Appcontext)

    const person={
        name:"sreerag",
        place:"kochi",
        email:"s@gmail.com",
        Domain:"Mernstack"
    }

    function hello(){
        dispatch({type:"ok",datas:person})
    }

  return (
    <div>
        <button onClick={hello}>Click me</button>
    
    </div>
  )
}
 
export default First