import {createSlice} from '@reduxjs/toolkit'

const ProductData=createSlice({
    name:"Product",
    initialState:{
        ProductDetails:null,
    },

    reducers:{
        displayProduct:(state,action)=>{
            console.log("action values in redux toolkit ... (Product data) ",action);
            state.ProductDetails=action.payload
        },
        removeProduct:(state,action)=>{
state.ProductDetails=null
        }
    }
})

export const {displayProduct,removeProduct}=ProductData.actions
export default ProductData.reducer