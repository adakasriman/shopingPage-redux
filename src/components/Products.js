import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteProduct, getProducts } from '../redux/reducers/productSlice';
import { getToCart } from '../redux/reducers/cartSlice';
import { Routes, Route, useNavigate } from "react-router-dom";
import Popup from './Popup';
import { updateProduct } from '../redux/reducers/productSlice';



export default function Products() {
    const { products } = useSelector(store => store.products);
    const [updateItem, setUpdateItem] = useState();

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const disPatch = useDispatch();
    useEffect(() => {
        if (!products.length) {
            disPatch(getProducts());
        }

    }, []);

    const viewProduct = (id) => {
        navigate(`/productview/${id}`);
    }


    function updateProductItem(item) {
        setUpdateItem(item);
        setIsOpen(!isOpen);
    }

    function cancel() {
        setIsOpen(!isOpen);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // let obje
        disPatch(updateProduct(updateItem));
        setIsOpen(!isOpen);
    }

    const delectProductItem = (item) => {
        disPatch(deleteProduct(item));
    }




    return (
        <div>

            <div className="post_container">
                <div className="curdOperations">

                    {
                        products.length > 0 && products.map((item, index) => {
                            return <div className="item" key={index}>
                                <a onClick={() => viewProduct(item.id)}>
                                    {/* <a> */}

                                    <div>
                                        <img className="image_items" src={item.image} />
                                        <h5>
                                            {item.title}
                                        </h5>
                                    </div>
                                </a>
                                <div className='displayFlex_spacebetween'>
                                    <div><strong>Price</strong> {item.price}</div>
                                    <div><strong>Rationg</strong> {item.rating.rate ? item.rating.rate : 100}</div>
                                </div>
                                <div className="display_bottom">
                                    <div>
                                        <button onClick={() => disPatch(getToCart(item))} className='addTocard_btn'>add to cart</button>
                                        <div className='displayFlex_spacebetween' style={{ marginTop: "10px" }}>
                                            <button onClick={() => updateProductItem(item)}>Edit</button>
                                            <button onClick={() => delectProductItem(item)}>Delete</button>
                                        </div>

                                        {/* <button onClick={() => editPost(item.id)}>edit</button>
                                        <button onClick={(e) => deletePost(e, item.id)}>Delete</button> */}
                                    </div>
                                </div>

                            </div>;
                        })
                    }
                </div>

            </div>
            {
                isOpen && <Popup content={
                    <>
                        <h3>Update product</h3>
                        <div className='cartView'>
                            <form onSubmit={(e) => onSubmit(e)} className="">
                                <div className='form_content'>
                                    <div className='item'>
                                        <div className='input_field'>
                                            <div>Title</div>
                                            <input type="text" value={updateItem.title} onChange={(e) => setUpdateItem(oldState => ({ ...oldState, title: e.target.value }))} />
                                        </div>
                                        <div className='input_field'>
                                            <div>Price</div>
                                            <input type="text" value={updateItem.price} onChange={(e) => setUpdateItem(oldState => ({ ...oldState, price: e.target.value }))} />
                                        </div>
                                    </div>
                                </div>
                                <button type='button' onClick={() => cancel()}>Cancel</button>
                                <button type='Submit'>update</button>
                            </form>
                        </div>
                    </>} handleClose={updateProductItem} />
            }
        </div>
    )
}
