import {createSlice} from '@reduxjs/toolkit'

const userData=createSlice({
    name:"user",
    initialState:{
        userInfo:[],
        Logininfo:null
    },

    reducers:{
        displayUser:(state,action)=>{
            console.log("action values in redux toolkit ... ",action);
            state.userInfo.push(action.payload)
        },
        removeUser:(state,action)=>{
state.userInfo=[]
        },
        LoginUser:(state,action)=>{
            console.log("Login action",action);
            state.Logininfo=action.payload

        },
        LogoutUser:(state)=>{
            state.Logininfo=null
        }
    }
})

export const {displayUser,removeUser,LoginUser,LogoutUser}=userData.actions
export default userData.reducer