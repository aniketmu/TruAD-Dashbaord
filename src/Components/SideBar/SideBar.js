import React from 'react'
import "./SideBar.css";
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="sidebarContainer">
            <div className='headingContainer'>
                <h2 className="heading">WELCOME</h2>
            </div>
            
           <Link to={"/dashboard/"} style={{textDecoration:"none",color:"white"}}><div className='buttonContainer'><span>Resourse Management</span> </div></Link> 
           <Link to={"/dashboard/material/"} style={{textDecoration:"none",color:"white"}} >
           <div className='buttonContainer'><span> Material Management</span> </div>
           </Link>
            
        </div>
    )
}
