import React, { useCallback, useMemo, useState } from 'react'
import axios from 'axios'
// import Usememochild from './Usememochild'
import { Memook } from './Usememochild'

const Usememo1 = () => {

    const [state,setState]=useState(0)
    const [state1,setState1]=useState(0)
    console.log("parentComponent re-rendered");

// function count(){
//    for(let i=0;i<2000000000;i++){

//    }
//    return state%2==0

// }

const data=useMemo(()=>{
    for(let i=0;i<2000000000;i++){

    }
    return state%2==0 
},[state])

// console.log("count value",count());


function display(){
    console.log("hello");
}

const Memofunction=useCallback(display,[])


  return (
    <div>
        <h1>{state}</h1>
        <h1>{state1}</h1>
        {data ? "even" : "odd"}
      <button onClick={()=>setState(state+1)}>click</button>
      <button onClick={()=>setState1(state1+1)}>click 1</button>
      <Memook fundata={Memofunction}/>
    </div>
  )
}

export default Usememo1
