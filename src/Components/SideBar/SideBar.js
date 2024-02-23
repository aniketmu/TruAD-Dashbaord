import React from "react";
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
import image from "../img/logo.png";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Divider } from "@mui/material";

export default function SideBar({ removeCookie, navigate }) {
  const location = useLocation(); // Get current location
  return (
    <div style={{ width: "20%", backgroundColor: "#191919", height: "100vh" }}>
      <Toolbar
        component={"nav"}
        sx={{
          flexDirection: "column",
          alignItems: "center",
          overflowX: "auto",
          padding: "0",
          height: "100%",
        }}
      >
        <Box
          component="img"
          sx={{ marginInline: "auto" }}
          src={image}
          height={"6em"}
          width={"6em"}
          alt="this is image"
        />

        <Divider sx={{ width: "100%", bgcolor: "#f8f9fa", opacity: 0.75 }} />

        {/* <List sx={{ color: "white", width: "100%", paddingTop:'2rem' }}>
          <Link
            to={"/dashboard/homepage"}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <ListItem key={"HOME PAGE"} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary={"HOME PAGE".toUpperCase()} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to={"/dashboard/popularpicks/"}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <ListItem key={"PopularPicks"} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                  <WhatshotIcon />
                </ListItemIcon>
                <ListItemText primary={"Popular Picks".toUpperCase()} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to={"/dashboard/"}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <ListItem key={"Resource"} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                  <SourceIcon />
                </ListItemIcon>
                <ListItemText primary={"Resource Management".toUpperCase()} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to={"/dashboard/material/"}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <ListItem key={"material"} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary={"Material Management".toUpperCase()} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to={"/dashboard/invoices/"}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <ListItem key={"invoices"} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText primary={"Invoices".toUpperCase()} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to={"/dashboard/placepromotion"}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <ListItem key={"placepromotion"} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                  <CampaignIcon />
                </ListItemIcon>
                <ListItemText primary={"Place Promotion".toUpperCase()} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to={"/dashboard/datareport/"}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <ListItem key={"HOMEPAGE"} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                  <DataThresholdingIcon />
                </ListItemIcon>
                <ListItemText primary={"Data Report".toUpperCase()} />
              </ListItemButton>
            </ListItem>
          </Link>
        </List> */}
        {/* <button
          style={{ position: "absolute", bottom: "0px" }}
          onClick={(e) => {
            removeCookie("user", { path: "/" });
            navigate("/");
          }}
          className="signoutButton"
        >
          SIGNOUT
        </button> */}
        <List sx={{ width: "100%", color: "white", paddingTop: "2rem" }}>
          {[
            {
              text: "HOME PAGE",
              icon: <HomeIcon />,
              link: "/dashboard/homepage",
            },
            {
              text: "Popular Picks",
              icon: <WhatshotIcon />,
              link: "/dashboard/popularpicks/",
            },
            {
              text: "Resource Management",
              icon: <SourceIcon />,
              link: "/dashboard/",
            },
            {
              text: "Material Management",
              icon: <CategoryIcon />,
              link: "/dashboard/material/",
            },
            {
              text: "Invoices",
              icon: <ReceiptIcon />,
              link: "/dashboard/invoices/",
            },
            {
              text: "Place Promotion",
              icon: <CampaignIcon />,
              link: "/dashboard/placepromotion",
            },
            {
              text: "Data Report",
              icon: <DataThresholdingIcon />,
              link: "/dashboard/datareport/",
            },
          ].map(({ text, icon, link }, index) => (
            <Link
              key={index}
              to={link}
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#d3d6dad9", fontSize: "2rem" }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text.toUpperCase()} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Button
          className="signoutButton"
          onClick={(e) => {
            removeCookie("user", { path: "/" });
            navigate("/");
          }}
          sx={{
            color: "white",
            marginTop: "auto",
            marginBottom: "2em",
            paddingBlock: "0.65rem",
            borderRadius: "8px",
          }}
        >
          SIGNOUT
        </Button>
      </Toolbar>
    </div>
  );
}
