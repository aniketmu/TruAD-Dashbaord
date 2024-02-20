import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

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
            <span>Home Page</span>{" "}
          </div>
        </Link>
        <Link to={"/dashboard/popularpicks/"} className="buttonLink">
          <div className="buttonContainer">
            <span>Popular Picks</span>{" "}
          </div>
        </Link>
        <Link to={"/dashboard/"} className="buttonLink">
          <div className="buttonContainer">
            <span>Resource Management</span>{" "}
          </div>
        </Link>
        <Link to={"/dashboard/material/"} className="buttonLink">
          <div className="buttonContainer">
            <span> Material Management</span>{" "}
          </div>
        </Link>
        <Link to={"/dashboard/invoices/"} className="buttonLink">
          <div className="buttonContainer">
            <span>Invoices</span>
          </div>
        </Link>
        <Link to={"/dashboard/placepromotion"} className="buttonLink">
          <div className="buttonContainer">
            <span>Place Promotion</span>
          </div>
        </Link>
        <Link to={"/dashboard/datareport/"} className="buttonLink">
          <div className="buttonContainer">
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
