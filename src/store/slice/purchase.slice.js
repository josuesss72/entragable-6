import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState: null,
  reducers: {
    setPurchaseSliceGlobal: (state, action) => action.payload
  }
})

export const { setPurchaseSliceGlobal } = purchaseSlice.actions
export default purchaseSlice.reducer

export const getUserPurchase = () => (dispatch) => {
  axios.get('https://e-commerce-api.academlo.tech/api/v1/purchases', getConfig()) 
    .then(res => dispatch(setPurchaseSliceGlobal(res.data.data.purchases)))
    .catch(err => console.log(err))
}
