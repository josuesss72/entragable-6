import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const products = createSlice({
  name: 'products',
  initialState: null,
  reducers: {
    setProductsGlobal: (state, action) => action.payload 
  }
})

export const { setProductsGlobal } = products.actions
export default products.reducer

export const getAllProducts = (idCategory) => (dispatch) => {
  axios.get(`https://e-commerce-api.academlo.tech/api/v1/products${idCategory? `?category=${idCategory}` : ''}`)
    .then(res => {
      dispatch(setProductsGlobal(res.data.data.products)) 
    })
    .catch(err => console.log(err))
}
