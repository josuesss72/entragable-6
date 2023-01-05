import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: null, 
  reducers: {
    setCartSliceGlobal: (state, acion) => acion.payload
  }
})


export const { setCartSliceGlobal } = cartSlice.actions
export default cartSlice.reducer

export const getUserCart = () => (dispatch) => {
  axios.get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig())
    .then(res => dispatch(setCartSliceGlobal(res.data.data.cart.products)))
    .catch(err => {
      dispatch(setCartSliceGlobal(null))
    })
}

