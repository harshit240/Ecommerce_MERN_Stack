import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Layout/Loading';
import MetaData from '../MetaData';
import { Link } from 'react-router-dom'
import { getUsers } from '../../Actions/AdminActions/UserAction';
const AllUser = () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector((state) => state.Users)
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  useEffect(() => {
    dispatch(getUsers())
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
                  <th scope="col">Email</th>
                  <th scope="col">Image</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>


                {
                  loading ? (<>
                    <tr>
                      <td colSpan="5" className='loader'>Loading</td>
                    </tr>
                  </>) : (
                    users && users.map((val, key) => {
                      return (
                        <tr key={key} className=' text-center'>
                          <td>{key + 1}</td>
                          <td>{val?.name}</td>
                          <td>{val?.email}</td>
                          <td>
                            <img src={val?.avatar.url} alt="productImage" width={'50px'} height={'50px'} />
                          </td>
                          <td>
                            {val?.role}
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

export default AllUser
