import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = {
    products: [],
};


export const getProducts = () => {
    return (dispatch) => {
        fetch("https://fakestoreapi.com/products", {
            method: "GET",
        })
            .then(res => res.json())
            .then(resData => {
                dispatch(getProductsList(resData));
            })
    }
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            let newproductId = state.products.length + 1;
            let newProduct = {
                id: newproductId,
                ...action.payload
            }
            state.products.push(newProduct);

        },

        getProductsList: (state, action) => {
            state.products = [...state.products, ...action.payload]
        },
        // addToCart: (state) => {

        // }

    }
})

export const { addProduct, getProductsList } = productSlice.actions;

export default productSlice.reducer;