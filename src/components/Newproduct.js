import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewItem } from '../redux/reducers/productSlice';

export const Newproduct = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const disPatch = useDispatch();
    const onSubmit = data => {
        disPatch(addNewItem(data));
        navigate("/");

    };

    return (
        <div className='addproduct'>
            <div className='text_center mt_10'>Add Product</div>

            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className='form_content'>
                    <div className='item'>
                        <div className='input_field'>
                            <div>Title</div>
                            <input type="text"{...register("title")} />
                        </div>
                        <div className='input_field'>
                            <div>Price</div>
                            <input type="text" {...register("price")} />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='input_field'>
                            <div>Description</div>
                            <input type="text" {...register("description")} />
                        </div>
                        <div className='input_field'>
                            <div>Category</div>
                            <input type="text"  {...register("category")} />
                        </div>
                    </div>
                    <div className='item'>

                        <div className='input_field'>
                            <div>rate</div>
                            <input type="text"  {...register("rating.rate")} />
                        </div>
                        <div className='input_field'>
                            <div>image</div>
                            <input type="text"  {...register("image")}  placeholder="please paste url Image"/>
                            {/* <input className='fileUpload' type="file" id="img" name="img" accept="image/*" {...register("image")} /> */}
                        </div>
                    </div>
                </div>
                <button type='Submit' className='mt_10'>Submit</button>
            </form>
            <div className='displayFlex_center mt_30' style={{justifyContent: "center"}}>
                <button onClick={() =>navigate("/")} className='backtoProducts'>back to products</button>
            </div>
        </div>
    )
}
