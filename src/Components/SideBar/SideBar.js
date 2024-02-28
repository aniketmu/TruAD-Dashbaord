import React, { useState } from "react";
import "./SideBar.css";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SourceIcon from "@mui/icons-material/Source";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import CategoryIcon from "@mui/icons-material/Category";
import CampaignIcon from "@mui/icons-material/Campaign";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const list = [
  {
    name: "home page",
    targetLink: "/dashboard/homepage",
    icon: <HomeIcon />,
    isActive: false,
  },
  {
    name: "Popular Picks",
    targetLink: "/dashboard/popularpicks/",
    icon: <WhatshotIcon />,
    isActive: false,
  },
  {
    name: "Resource Management",
    targetLink: "/dashboard/",
    icon: <SourceIcon />,
    isActive: true,
  },
  {
    name: "Material Management",
    targetLink: "/dashboard/material/",
    icon: <CategoryIcon />,
    isActive: false,
  },
  {
    name: "invoices",
    targetLink: "/dashboard/invoices/",
    icon: <ReceiptIcon />,
    isActive: false,
  },
  {
    name: "Place Promotion",
    targetLink: "/dashboard/placepromotion",
    icon: <CampaignIcon />,
    isActive: false,
  },
  {
    name: "Data Report",
    targetLink: "/dashboard/datareport/",
    icon: <DataThresholdingIcon />,
    isActive: false,
  },
];

export default function SideBar({ removeCookie, navigate }) {
  const [list1, setList1] = useState(list);
  const [collapsed, setCollapsed] = useState(false);

  const handleListColor = (i) => {
    const newArr = [...list];
    newArr.forEach((e) => {
      e.isActive = false;
    });
    newArr[i].isActive = true;

    setList1(newArr);
  };

  const location = useLocation(); // Get current location

  return (
    <div
      style={{
        width: collapsed ? "100px" : "20%",
        backgroundColor: "#191919",
        color: "white",
        height: "100vh",
        position: "relative",
        transition: "width 0.5s ease",
      }}
    >
      <Toolbar sx={{ background: "black", width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          src="https://www.truad.co/wp-content/uploads/2023/11/logo_transparent_1-150x150.png"
          style={{
            height: "100px",
            width: "100px",
            margin: "0px",
            padding: "0px",
            zIndex: "1",
          }}
          alt=""
        />
      </Toolbar>
      <div style={{ display: "flex", justifyContent: "center" }}>

        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{ width: "80%" }}
        >
          {collapsed ? "Open" : "Collapse"}
        </button>
      </div>
      <List>
        {list1.map((e, i) => (
          <Link
            to={e.targetLink}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              
            }}
            key={i}
            onClick={() => {
              handleListColor(i);
            }}
          >
            <ListItem
              disablePadding
              style={
                e.isActive
                  ? {
                    backgroundColor: "red",
                    border: "1px solid black",
                    borderRadius: "5px",
                    width: "80%",
                  }
                  : { width: "80%" }
              }
            >
              <ListItemButton>
                <ListItemIcon
                  sx={{ color: "#d3d6dad9" }}
                  style={
                    collapsed
                      ? {
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }
                      : {}
                  }
                >
                  {e.icon}
                </ListItemIcon>
                {!collapsed && <ListItemText primary={e.name.toUpperCase()} />}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      <button
        style={{ position: "absolute", bottom: "0px" }}
        onClick={(e) => {
          removeCookie("user", { path: "/" });
          navigate("/");
        }}
        className="signoutButton"
      >
        SIGNOUT
      </button>
    </div>
  );
}
