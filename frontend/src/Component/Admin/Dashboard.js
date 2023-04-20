import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  return (
    <>
      <h1>Dashboard</h1>
      <div className="container-fluid">
        <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
      </div>
    </>
  )
}

export default Dashboard
