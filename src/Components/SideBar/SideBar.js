import React from "react";
import "./SideBar.css";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SourceIcon from '@mui/icons-material/Source';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import CategoryIcon from '@mui/icons-material/Category';
import CampaignIcon from '@mui/icons-material/Campaign';


export default function SideBar({ removeCookie, navigate }) {
  const location = useLocation(); // Get current location
  return (
    <div className="sidebarContainer">
      <div className="headingContainer">
        <h2 className="heading">WELCOME</h2>
      </div>

      <div className="linksContainer">
        <div className="links">
{/* <<<<<<< HEAD */}
        <Link to={"/dashboard/homepage"} className='buttonLink'>
          <div className={`buttonContainer  ${location.pathname === "/dashboard/homepage" ? "active" : ""}`}>
            <span> <HomeIcon />Home Page</span>{" "}
          </div>
        </Link>
        <Link to={"/dashboard/popularpicks/"} className='buttonLink'>
          <div className={`buttonContainer  ${location.pathname === "/dashboard/popularpicks/" ? "active" : ""}`}>
            <span> <WhatshotIcon /> Popular Picks</span>{" "}
          </div>
        </Link>
        <Link to={"/dashboard/"} className='buttonLink'>
          <div className={`buttonContainer  ${location.pathname === "/dashboard/" ? "active" : ""}`}>
            <span> <SourceIcon /> Resource Management</span>{" "}
          </div>
        </Link>
        <Link to={"/dashboard/material/"} className='buttonLink'>
          <div className={`buttonContainer  ${location.pathname === "/dashboard/material/" ? "active" : ""}`}>
            <span>  <CategoryIcon />Material Management</span>{" "}
          </div>
        </Link>
        <Link to={"/dashboard/invoices/"} className='buttonLink'>
          <div className={`buttonContainer  ${location.pathname === "/dashboard/invoices/" ? "active" : ""}`}>
            <span> <ReceiptIcon />Invoices</span>
          </div>
        </Link>
        <Link to={"/dashboard/placepromotion"} className='buttonLink' >
          <div className={`buttonContainer  ${location.pathname === "/dashboard/placepromotion" ? "active" : ""}`}>
            <span><CampaignIcon />Place Promotion</span>
          </div>
        </Link>
        <Link to={"/dashboard/datareport/"} className='buttonLink'>
          <div className={`buttonContainer  ${location.pathname === "/dashboard/datareport/" ? "active" : ""}`}>
            <span><DataThresholdingIcon />Data Report</span>{" "}
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
