import React from 'react'
import SideBar from './SideBar/SideBar'
import { Outlet } from 'react-router-dom'

function DashBoardContainer() {
  return (
    <div style={{display:'flex',height:"100%",width:"100%"}}>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default DashBoardContainer