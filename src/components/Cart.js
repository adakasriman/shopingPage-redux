import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


export const Cart = () => {
    const { cart } = useSelector(store => store.cart);



    return (
        <div>{cart.length}</div>
    )
}
