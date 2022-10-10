import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const ProductView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useSelector(store => store.products);
    const viewProduct = products.find(item => item.id == id);

    return (
        <div>
            <div className='viewProdct'>
                <div className='content'>
                    <div className='image_item'>
                        <img className="" src={viewProduct.image} />
                    </div>
                    <div className='priceAndRating'>
                        <div><strong>Price</strong> {viewProduct.price}</div>
                        <div><strong>Rationg</strong> {viewProduct.rating.rate? viewProduct.rating.rate: 100}</div>
                    </div>
                </div>
                <div>
                    <h2 >{viewProduct.title}</h2>
                    <div className='mt_30'><strong>category:</strong> {viewProduct.category}</div>
                    <div className='mt_30'>
                        <strong>Discription</strong> {viewProduct.description}
                    </div>
                </div>
            </div>
            <div className='displayFlex_center' style={{justifyContent: "center"}}>
                <button onClick={() =>navigate("/")} className='backtoProducts'>back to products</button>
            </div>
        </div>
    )
}
