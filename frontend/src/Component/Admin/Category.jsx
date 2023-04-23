import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Layout/Loading';
import MetaData from '../MetaData';
import {Link} from 'react-router-dom'
import { getAdminCategories } from '../../Actions/AdminActions/CategoryAction';

const Category = () => {
  const dispatch = useDispatch();
  const { loading, categories } = useSelector((state) => state.adminCategory)
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  console.log(loading, categories)
  useEffect(() => {
    dispatch(getAdminCategories())
  }, [dispatch])



  return (
    <>
    <MetaData title={"Category"} />
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
                  <th scope="col">Image</th>
                </tr>
              </thead>
              <tbody>


                {
                  loading ? <Loading/> : (
                    categories && categories?.map((val, key) => {
                      return (
                        <tr  key={key} className=' text-center'>
                          <td>{key + 1}</td>
                          <td>{val?.name}</td>
                          <td>{val?.description}</td>
                          <td>
                            <img src={val?.images.url} alt="productImage" width={'50px'} height={'50px'} />
                          </td>
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

export default Category;
