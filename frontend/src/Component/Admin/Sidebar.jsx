import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = ({ sidebar, closeSidebar,}) => {
  return (
    <>
      {/* <div className={sidebar ? "sidebar" : "sidebar sidebar--open"}>
        <ul>
          <li onClick={closeSidebar}> <ArrowForwardIosIcon /> </li>
          <li onClick={() => closeSidebarWithView('home')}><HomeIcon />Home</li>
          <li onClick={() => closeSidebarWithView('skills')}><BuildIcon />ToolKit</li>
          <li onClick={() => closeSidebarWithView('projects')}><IntegrationInstructionsIcon />Projects</li>
          <li onClick={() => closeSidebarWithView('contact')} ><ContactMailIcon /> Contact</li>
        </ul>
      </div> */}
      <div className={sidebar ? "sidebar" : "sidebar sidebar--open"}>
        <ul>
          <li onClick={closeSidebar}>Close </li>
          <li>
            <Link  to="/admin/products">
              <i className="fa fa-cubes"></i>
              &nbsp;&nbsp;Products
            </Link>
            <ul className="nav flex-column ml-3">
              <li >
                <Link to="/admin/create/product">Create Product</Link>
              </li>
              <li >
                <Link to="/">Delete Product</Link>
              </li>
            </ul>
          </li>
          <li>
          <Link to="/admin/category">
              <i className="fa fa-list"></i>
              &nbsp;&nbsp;Category
            </Link>
            <ul className="nav flex-column ml-3">
              <li >
                <Link to="/admin/create/category">Create Category</Link>
              </li>
              <li >
                <Link to="/">Delete Product</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={'/all/users'}>
            <i className="fa fa-user"></i>
            &nbsp;&nbsp;All Users</Link>
          </li>
          <li>All Orders</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
