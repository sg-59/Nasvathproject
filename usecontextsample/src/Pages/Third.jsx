import React, { useContext } from 'react'
import { Appcontext } from './Context1'

const Third = () => {

    const data=useContext(Appcontext)

    console.log("##############",data.User);

  return (
    <div>
      <h1>{data.User&&data.User.name}</h1>
    </div>
  )
}

export default Third
