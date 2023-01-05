import { configureStore } from "@reduxjs/toolkit";
import products  from "./slice/Products.slice";
import cart from "./slice/cart.slice";
import purchase from "./slice/purchase.slice";

export default configureStore({
  reducer: {
    products, 
    cart,
    purchase
  }
})
