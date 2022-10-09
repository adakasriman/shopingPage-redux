import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import productReducer from "./reducers/productSlice";



export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartSlice
    }
})

