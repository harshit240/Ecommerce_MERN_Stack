import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Actions/AdminActions/ProductAction';
import Loading from '../Layout/Loading';
import MetaData from '../MetaData';
import {Link} from 'react-router-dom'

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.adminProduct)
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  console.log(loading, products)
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])



  return (
    <>
    <MetaData title={"Products"} />
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-2">
            <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
          </div>
          <div className="col-md-10 table-responsive">
            <table className="table table-bordered table-hover table-striped table-info ">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>


                {
                  loading ? <Loading/> : (
                    products && products.map((val: any, key: any) => {
                      return (
                        <tr  key={key} className=' text-center'>
                          <td>{key + 1}</td>
                          <td>{val?.name}</td>
                          <td>{val?.description}</td>
                          <td>{val?.price}</td>
                          <td>
                            <img src={val?.images.url} alt="productImage" width={'50px'} height={'50px'} />
                          </td>
                          <td>{val?.stock}</td>
                          <td>{val?.rating}</td>
                          <td className='d-flex'>
                            <Link to={`edit/product/${val._id}`} className='btn btn-info mx-2'>Edit</Link>
                            <Link to={`edit/product/${val._id}`} className='btn btn-danger mx-2'>Delete</Link>
                          </td>
                        </tr>
                      )
                    })
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
