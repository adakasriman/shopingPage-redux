import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



let initialState = {
    products: [],
};  // initialing initialState for products


export const getProducts = () => {  // This function for get products from the api
    return (dispatch) => {  // Its have default dispatch method
        fetch("https://fakestoreapi.com/products", {  // fecthcing data from the server
            method: "GET",  // GET method
        })
            .then(res => res.json())
            .then(resData => {
                dispatch(getProductsList(resData)); // dispatching response data to getProductsList reducer
            })
    }
}

export const addNewItem = (newproduct) => {
    return (dispatch) => {  // Its have default dispatch method
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
                dispatch(addProduct(json)); // adding new product to  addProduct reducer
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
                dispatch(updateProductItem(json))  //sending updated product to updateProductItem reducer
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
                dispatch(deleteProductItem(json ? json : product))  // deleteing product based on id and sending response  deleteProductItem reducer
            });
    }
}


// reducer ==> do some operation based on action and updating state
const productSlice = createSlice({
    name: "product", // 
    initialState,
    reducers: {
        addProduct: (state, action)/* state: initial state of slice , action: action is object that payload etc. */ => { 
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