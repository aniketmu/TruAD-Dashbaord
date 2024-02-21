import React from "react";
import "./SideBar.css";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

export default function SideBar({ removeCookie, navigate }) {
  const location = useLocation(); // Get current location
  return (
    <div className="sidebarContainer">
      <div className="headingContainer">
        <h2 className="heading">WELCOME</h2>
      </div>

      <div className="linksContainer">
        <div className="links">
        <Link to={"/dashboard/homepage"} className='buttonLink'>
          <div className={`buttonContainer  ${location.pathname === "/dashboard/homepage" ? "active" : ""}`}>
            <span>Home Page</span>{" "}
          </div>
        </Link>
        <Link to={"/dashboard/popularpicks/"} className='buttonLink'>
          <div className={`buttonContainer  ${location.pathname === "/dashboard/popularpicks/" ? "active" : ""}`}>
            <span>Popular Picks</span>{" "}
          </div>
        </Link>
        <Link to={"/dashboard/"} className='buttonLink'>
          <div className={`buttonContainer  ${location.pathname === "/dashboard/" ? "active" : ""}`}>
            <span>Resource Management</span>{" "}
          </div>
        </Link>
        <Link to={"/dashboard/material/"} className='buttonLink'>
          <div className={`buttonContainer  ${location.pathname === "/dashboard/material/" ? "active" : ""}`}>
            <span> Material Management</span>{" "}
          </div>
        </Link>
        <Link to={"/dashboard/invoices/"} className='buttonLink'>
          <div className={`buttonContainer  ${location.pathname === "/dashboard/invoices/" ? "active" : ""}`}>
            <span>Invoices</span>
          </div>
        </Link>
        <Link to={"/dashboard/placepromotion"} className='buttonLink' >
          <div className={`buttonContainer  ${location.pathname === "/dashboard/placepromotion" ? "active" : ""}`}>
            <span>Place Promotion</span>
          </div>
        </Link>
        <Link to={"/dashboard/datareport/"} className='buttonLink'>
          <div className={`buttonContainer  ${location.pathname === "/dashboard/datareport/" ? "active" : ""}`}>
            <span>Data Report</span>{" "}
          </div>
        </Link>
        </div>
      </div>

      <button
        onClick={(e) => {
          removeCookie("user", { path: "/" });
          navigate("/");
        }}
        className="signoutButton"
      >
        Signout
      </button>
    </div>
  );
}
