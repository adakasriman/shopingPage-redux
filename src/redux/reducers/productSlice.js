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

export const addNewItem = (newproduct) => {
    return (dispatch) => {
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(

                newproduct

            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(json => {
                dispatch(addProduct(json));
            });
    }
}

export const updateProduct = (product) => {
    return (dispatch) => {
        fetch(`https://fakestoreapi.com/products/${product.id}`, {
            method: "PATCH",
            body: JSON.stringify(
                product
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(json => {
                dispatch(updateProductItem(json))
            });
    }
}

export const deleteProduct = (product) => {
    return (dispatch) => {
        fetch(`https://fakestoreapi.com/products/${product.id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(json => {
                dispatch(deleteProductItem(json? json : product))
            });
    }
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            Object.assign(action.payload, { rating: { rate: 10000 } });
            state.products.push(action.payload);
        },

        updateProductItem: (state, action) => {
            Object.assign(action.payload, { rating: { rate: 10000 } });
            let index = state.products.findIndex((item) => item.id == action.payload.id);
            state.products.splice(index, 1, action.payload);
        },
        deleteProductItem: (state, action) => {
            let index = state.products.findIndex((item) => item.id == action.payload.id);
            state.products.splice(index, 1);
        },

        getProductsList: (state, action) => {
            state.products = [...state.products, ...action.payload];
        },
        // addToCart: (state) => {

        // }

    }
})

export const { addProduct, getProductsList, updateProductItem, deleteProductItem } = productSlice.actions;

export default productSlice.reducer;