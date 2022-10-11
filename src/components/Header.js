import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/reducers/cartSlice';
import { useState } from 'react';
import Popup from './Popup';
import { useNavigate } from "react-router-dom";

function Header() {
    const { cart } = useSelector(store => store.cart);
    const [isOpen, setIsOpen] = useState(false);
    const [isaddNewOpen, setIsAddNewOpen] = useState(false);

    const [buttonType, setButtonType] = useState(true);
    const navigate = useNavigate();
    const disPatch = useDispatch();
    function popup() {
        setButtonType(true);
        setIsOpen(!isOpen);
    }


    const addNewProduct = () => {
        navigate("./newproduct");
    }

    const viewProduct = (id) => {
        setIsOpen(!isOpen);
        navigate(`/productview/${id}`);
    }

    const goProducts = () => {
        navigate("/");
    }

    const removeItemFromCart = (id) => {
        disPatch(removeItem(id));
    }

    // const { products } = useSelector(store => store.products);
    return (
        <div className='displayFlex_spacebetween p_20'>
            <div className='displayFlex_center' style={{ gap: "10px" }}>
                <i className="fa-solid fa-bag-shopping"></i>
                <a className='project_title' onClick={() => goProducts()}>Fake Shoping</a>
            </div>

            <div className='displayFlex_spacebetween gap_15'>
                <div className='displayFlex_center gap_15'>
                    <button className='displayFlex_center cart_button' onClick={() => popup()}>
                        <div><i className="fa-solid fa-cart-shopping"></i></div>
                        <div className='cartItems' >{cart.length}</div>
                    </button>
                    <button className='addProduct' onClick={() => addNewProduct()}>Add New</button>
                </div>
                {
                    isOpen && <Popup content={
                        <>
                            <h3>view Cart</h3>
                            <div className='cartView'>
                                {
                                    cart.length > 0 && cart.map((item, index) => {
                                        return <div key={index} className="item" >
                                            <div onClick={() => viewProduct(item.id)}>
                                                <div>
                                                    <img className="image_items" src={item.image} />
                                                    <h5>
                                                        {item.title}
                                                    </h5>
                                                </div>
                                                <div className='displayFlex_spacebetween'>
                                                    <div><strong>Price</strong> {item.price}</div>
                                                    <div><strong>Rationg</strong> {item.rating.rate}</div>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='addTocard_btn' onClick={() => removeItemFromCart(item.id)}>Remove</button>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                            <div>
                                {
                                    !cart.length && <div className='justifyContent mt_30'><h5> No Items In Cart</h5></div>
                                }
                            </div>
                        </>} handleClose={popup} />
                }
            </div>
        </div >
    )
}

export default Header