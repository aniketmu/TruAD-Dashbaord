import React from 'react'
import "./SideBar.css";

export default function SideBar() {
    return (
        <div className="sidebarContainer">
            <div className='headingContainer'>
                <h2 className="heading">WELCOME</h2>
            </div>

            <div className='buttonContainer'><span>Resourse Management</span> </div>
            <div className='buttonContainer'><span> Material Management</span> </div>
        </div>
    )
}
