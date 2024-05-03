import { createContext, useEffect, useReducer } from "react"


const Initialvalue={
    useData:JSON.parse(localStorage.getItem('Rijo')) || null
}

export const Appcontext=createContext(Initialvalue.useData)

const display=(state,action)=>{
    console.log("************",action);
    switch(action.type){
        case "ok":
            return {useData:action.datas}

            case "remove":
                return {useData:null}
    }

}


export const Userinfo=({children})=>{

    const [state,dispatch]=useReducer(display,Initialvalue)

    console.log("final state value",state);

    useEffect(()=>{
localStorage.setItem("Rijo",JSON.stringify(state.useData))
    },[state.useData])

    return(
        <>
<Appcontext.Provider value={{dispatch,User:state.useData}}>
{children}
</Appcontext.Provider>
        </>
    )
}