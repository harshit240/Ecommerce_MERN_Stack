import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../MetaData';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { createCategory } from '../../Actions/AdminActions/CategoryAction';

const CreateCategory = () => {
    const navigate = useNavigate();
    const alert = useAlert();
    const { products } = useSelector((state) => state.adminCategory)
    // console.log(products)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
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
        // console.log(image)
        // console.log(formData)
       
        dispatch(createCategory(formData))
    }
    useEffect(() => {

    }, [dispatch, products])
    return (
        <>
            <MetaData title={"Create Category"} />
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
                            <div className="form-group ">
                                <label htmlFor="inputimg">Image</label>
                                <input type="file" className="form-control" id="inputimg" name='image' onChange={(e) => setImage(e.target.files[0])} />
                            </div>
                            <button type="submit" className="btn btn-success">Add Category</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateCategory
