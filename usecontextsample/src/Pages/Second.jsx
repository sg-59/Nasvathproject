import React, { useContext } from 'react'
import { Appcontext } from './Context1'

const Second = () => {

    const Ok=useContext(Appcontext)
    const {dispatch}=useContext(Appcontext)



    const remove=()=>{
dispatch({type:"remove"})
    }

  return (
    <div>
        <h1>{Ok.User&&Ok.User.name}</h1>
        <h1>{Ok.User&&Ok.User.place}</h1>
        <h1>{Ok.User&&Ok.User.email}</h1>
        <h1>{Ok.User&&Ok.User.Domain}</h1>
        <button onClick={remove}>Remove</button>
    </div>
  )
}

export default Second