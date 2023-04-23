import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createProduct,clearErrors } from '../../Actions/AdminActions/ProductAction';
import MetaData from '../MetaData';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import {ADMIN_PRODUCT_RESET} from '../../Constants/AdminConstants.js'
const CreateProduct = () => {
    const navigate = useNavigate();
    const alert = useAlert();
    const { products,error } = useSelector((state) => state.adminProduct)
    // console.log(products)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = (e) => {
        e.preventDefault();
        setSidebar((prevState) => !prevState)
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name)
        formData.append("description", description)
        formData.append("image", image)
        formData.append("price", price)
        formData.append("stock", stock)
        formData.append("rating", rating)
        console.log(image)
        console.log(formData)
        dispatch(createProduct(formData))
    }
    useEffect(() => {
        if(error){
            alert.error(error)
            dispatch(clearErrors)
        }
        // if (products) {
        //     alert.success("Product Added successfully")
        //     navigate("/admin/products");
        //     dispatch({
        //         type: ADMIN_PRODUCT_RESET
        //     })
        // }
    },[dispatch,products])
    return (
        <>
            <MetaData title={"Create Product"} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
                    </div>
                    <div className="col-md-10 py-3" style={{ "backgroundColor": "#A6D0DD" }}>
                        <form onSubmit={handlesubmit} encType="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" name='name' className="form-control" onChange={(e) => setName(e.target.value)} id="inputName" placeholder="Enter Product Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputDescription">Description</label>
                                <input type="text" className="form-control" id="inputDescription" onChange={(e) => setDescription(e.target.value)} placeholder="Description about the product" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputprice">Price</label>
                                    <input type="number" className="form-control" id="inputprice" name='number' onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputstock">Stock</label>
                                    <input type="number" className="form-control" id="inputstock" name='stock' onChange={(e) => setStock(e.target.value)} placeholder="Enter stock" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputRating">Rating</label>
                                    <input type="number" className="form-control" id="inputRating" name='rating' onChange={(e) => setRating(e.target.value)} />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputimg">Image</label>
                                    <input type="file" className="form-control" id="inputimg" name='image' onChange={(e) => setImage(e.target.files[0])} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success">Add Product</button>
                        </form>


                    </div>

                </div>
            </div>
        </>
    )
}

export default CreateProduct
