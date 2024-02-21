import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SourceIcon from '@mui/icons-material/Source';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import CategoryIcon from '@mui/icons-material/Category';
import CampaignIcon from '@mui/icons-material/Campaign';

export default function SideBar({ removeCookie, navigate }) {
  return (
    <div className="sidebarContainer">
      <div className="headingContainer">
        <h2 className="heading">WELCOME</h2>
      </div>

      <div className="linksContainer">
        <div className="links">
          <Link to={"/dashboard/homepage"} className="buttonLink">
            <div className="buttonContainer">
              <span><HomeIcon /> Home Page</span>{" "}
            </div>
          </Link>
          <Link to={"/dashboard/popularpicks/"} className="buttonLink">
            <div className="buttonContainer">
              <span> <WhatshotIcon /> Popular Picks</span>{" "}
            </div>
          </Link>
          <Link to={"/dashboard/"} className="buttonLink">
            <div className="buttonContainer">
              <span> <SourceIcon /> Resource Management</span>{" "}
            </div>
          </Link>
          <Link to={"/dashboard/material/"} className="buttonLink">
            <div className="buttonContainer">
              <span> <CategoryIcon /> Material Management</span>{" "}
            </div>
          </Link>
          <Link to={"/dashboard/invoices/"} className="buttonLink">
            <div className="buttonContainer">
              <span> <ReceiptIcon /> Invoices</span>
            </div>
          </Link>
          <Link to={"/dashboard/placepromotion"} className="buttonLink">
            <div className="buttonContainer">
              <span> <CampaignIcon /> Place Promotion</span>
            </div>
          </Link>
          <Link to={"/dashboard/datareport/"} className="buttonLink">
            <div className="buttonContainer">
              <span> <DataThresholdingIcon /> Data Report</span>{" "}
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
