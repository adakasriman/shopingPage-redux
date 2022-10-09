import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = {
    cart: [],
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getToCart: (state, acton) => {
            if (state.cart.length == 0) {
                console.log(acton.payload);
                debugger

                state.cart.push(acton.payload);
            } else {
                console.log(acton.payload.id);
                let boolean = state.cart.every(item => item.id !== acton.payload.id);
                if (boolean) {
                    state.cart.push(acton.payload);
                }
            }
        }

    }
})

export const { getToCart } = cartSlice.actions;

export default cartSlice.reducer;