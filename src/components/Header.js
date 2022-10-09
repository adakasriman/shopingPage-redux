import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Popup from './Popup';

function Header() {
    const { cart } = useSelector(store => store.cart);
    const [isOpen, setIsOpen] = useState(false);
    const [buttonType, setButtonType] = useState(true);
    function popup() {
        setButtonType(true);
        setIsOpen(!isOpen);
    }

    // const { products } = useSelector(store => store.products);
    return (
        <div className='displayFlex_spacebetween p_20'>
            <div>Fake Shoping</div>
            <div className='displayFlex_spacebetween gap_15'>
                <div>
                    <button className='displayFlex_center cart_button' onClick={() => popup()}>
                        <div>Cart</div>
                        <div className='cartItems' >{cart.length}</div>
                    </button>
                </div>
                <div>
                    user
                </div>

                {
                    isOpen && <Popup content={<>
                        <h3>Add Post</h3>
                        <div>
                            {
                                cart.length > 0 && cart.map((item, index) => {
                                    return <div className="item" key={index}>
                                        {/* <a onClick={() => viewpost(item.id)}> */}
                                        <div className='cartView'>
                                            <img className="image_items" src={item.image} />
                                            <h5>
                                                {item.title}
                                            </h5>
                                        </div>

                                    </div>;
                                })
                            }

                        </div>
                    </>} handleClose={popup} />
                }
            </div>
        </div>
    )
}

export default Header