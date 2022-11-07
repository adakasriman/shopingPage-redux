import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = {
    cart: [],
};
  // initialing initialState for cart


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: { // reducers
        getToCart: (state, acton)/* state: initial state of slice , action: action is object that payload etc. */ => {
            if (state.cart.length == 0) {
                state.cart.push(acton.payload);
            } else {
                let boolean = state.cart.every(item => item.id !== acton.payload.id);
                if (boolean) {
                    state.cart.push(acton.payload);
                }
            }
        },

        removeItem: (state,action) =>{
            let index = state.cart.findIndex((item) => item.id == action.payload);
            state.cart.splice(index,1)

        }

    }
})

export const { getToCart,removeItem } = cartSlice.actions;

export default cartSlice.reducer;