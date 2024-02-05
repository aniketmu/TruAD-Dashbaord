import React from 'react'
import "./SideBar.css";
import { Link } from 'react-router-dom';


export default function SideBar({ removeCookie, navigate }) {
    return (
        <div className="sidebarContainer" style={{ position: "relative" }}>
            <div className='headingContainer'>
                <h2 className="heading">WELCOME</h2>
            </div>

            <Link to={"/dashboard/homepage"} style={{ textDecoration: "none", color: "white" }}><div className='buttonContainer'><span>Home Page</span> </div></Link>
            <Link to={"/dashboard/popularpicks/"} style={{ textDecoration: "none", color: "white" }}><div className='buttonContainer'><span>Popular Picks</span> </div></Link>

            <Link to={"/dashboard/"} style={{ textDecoration: "none", color: "white" }}><div className='buttonContainer'><span>Resourse Management</span> </div></Link>
            <Link to={"/dashboard/material/"} style={{ textDecoration: "none", color: "white" }} >
                <div className='buttonContainer'><span> Material Management</span> </div>
            </Link>

            <Link to={"/dashboard/placepromotion"} style={{ textDecoration: "none", color: "white" }}><div className='buttonContainer'><span>Place Promotion</span> </div></Link>

            <Link to={"/dashboard/datareport/"} style={{ textDecoration: "none", color: "white" }}><div className='buttonContainer'><span>Data Report</span> </div></Link>
            <button onClick={(e) => { removeCookie("user", { path: "/" }); navigate("/") }} style={{ position: "absolute", bottom: "0", width: "100%" }}>Signout</button>
        </div>
    )
}
