import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getProducts } from '../redux/reducers/productSlice';
import { getToCart } from '../redux/reducers/cartSlice';

export default function Products() {
    const { products } = useSelector(store => store.products);


    const disPatch = useDispatch();
    useEffect(() => {
        disPatch(getProducts());
    }, []);


    return (
        <div>
            {/* <div>products</div>
            {products.length > 0 && products.map((item, index) => (
                <div key={index}>{item.title}</div>
            ))}

            <div>add product</div>
            <input type="text" value={newProduct} onChange={(e) => setNewproduct(e.target.value)} />
            <button onClick={() => disPatch(addProduct({ title: newProduct }))}>Add new</button> */}
            <div className="post_container">
                {/* <div className="add_btm">
                    <button onClick={() => popup()}>Add Post</button>
                </div> */}
                <div className="curdOperations">

                    {
                        products.length > 0 && products.map((item, index) => {
                            return <div className="item" key={index}>
                                {/* <a onClick={() => viewpost(item.id)}> */}
                                <a>

                                    <div>
                                        <img className="image_items" src={item.image} />
                                        <h5>
                                            {item.title}
                                        </h5>
                                    </div>
                                </a>
                                <div className="display_bottom">
                                    <div>
                                        <button onClick={() => disPatch(getToCart(item))} className='addTocard_btn'>add to cart</button>
                                        {/* <button onClick={() => editPost(item.id)}>edit</button>
                                        <button onClick={(e) => deletePost(e, item.id)}>Delete</button> */}
                                    </div>
                                </div>

                            </div>;
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}
