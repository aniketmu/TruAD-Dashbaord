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


import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";



export default function SideBar({ removeCookie, navigate }) {
  const location = useLocation(); // Get current location
  return (

    <div style={{ width: "20%", backgroundColor: "#191919", color: "white", height: "100vh", position:"relative" }}>
      <Toolbar sx={{ background: "black", position: "relative" }}>
        <Typography
          variant="h6" // Adjust the variant for different sizes
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#white",
            backgroundColor: "070F2B",
            // position:"relative",
            // backgroundColor:"red"
          }}
        >
          <img src="https://www.truad.co/wp-content/uploads/2023/11/logo_transparent_1-150x150.png" style={{ height: "110px", width: "110px", position: "absolute", bottom: "-67px", right: "-20px", margin: "0px", padding: "0px" }} alt="" />

          WELCOME

        </Typography>
      </Toolbar>
      {/* <Divider sx={{ borderTop: "1px solid rgb(39 39 40)" }} /> */}



      <List>
        <Link to={"/dashboard/homepage"} style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }}>
          <ListItem key={"HOME PAGE"} disablePadding className={location.pathname == "/dashboard/homepage" ? "active" : ""}>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"HOME PAGE".toUpperCase()} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={"/dashboard/popularpicks/"} style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }}>
          <ListItem key={"PopularPicks"} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                <WhatshotIcon />
              </ListItemIcon>
              <ListItemText primary={"Popular Picks".toUpperCase()} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={"/dashboard/"} style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }}>
          <ListItem key={"Resource"} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                <SourceIcon />
              </ListItemIcon>
              <ListItemText primary={"Resource Management".toUpperCase()} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={"/dashboard/material/"} style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }}>
          <ListItem key={"material"} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary={"Material Management".toUpperCase()} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={"/dashboard/invoices/"} style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }}>
          <ListItem key={"invoices"} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                <ReceiptIcon />
              </ListItemIcon>
              <ListItemText primary={"Invoices".toUpperCase()} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={"/dashboard/placepromotion"} style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }}>
          <ListItem key={"placepromotion"} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                <CampaignIcon />
              </ListItemIcon>
              <ListItemText primary={"Place Promotion".toUpperCase()} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={"/dashboard/datareport/"} style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }}>
          <ListItem key={"HOMEPAGE"} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                <DataThresholdingIcon />
              </ListItemIcon>
              <ListItemText primary={"Data Report".toUpperCase()} />
            </ListItemButton>
          </ListItem>
        </Link>


      </List>
      <button style={{position:"absolute", bottom:"0px"}}
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