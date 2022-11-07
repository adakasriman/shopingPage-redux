import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import productReducer from "./reducers/productSlice";



export const store = configureStore({ // Creating store using configureStore
    reducer: {  // having all reducer 
        products: productReducer, // product-reducer
        cart: cartSlice // cart-reducer
    }
})

