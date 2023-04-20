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
          <li>Product</li>
          <li>Category</li>
          <li>All Orders</li>
          <li>Registrations</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
