import React from 'react'

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
            <a  href="/admin/products">
              <i className="fa fa-cubes"></i>
              Products
            </a>
            <ul className="nav flex-column ml-3">
              <li >
                <a  href="/">Create Product</a>
              </li>
              <li >
                <a  href="/">Delete Product</a>
              </li>
            </ul>
          </li>
          <li>
          <a  href="/">
              <i className="fa fa-list"></i>
              Category
            </a>
            <ul className="nav flex-column ml-3">
              <li >
                <a  href="/">Create Product</a>
              </li>
              <li >
                <a  href="/">Delete Product</a>
              </li>
            </ul>
          </li>
          <li>All Orders</li>
          <li>Registrations</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
