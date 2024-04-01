import React, { useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import ChatBox from './ChatBox';

function DashBoardContainer() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  useEffect(() => {
    if (!cookies.user) {
      navigate("/");
    }
    // removeCookie("user", {path:'/'})
  }, [cookies]);

  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", height: "100%", width: "100%" }}>
      <SideBar removeCookie={removeCookie} navigate={navigate} />
      <Outlet />

      <div style={{ position: "fixed", bottom: "10px", right: "10px", borderRadius: "10px", width: "20vw" }} ><ChatBox></ChatBox></div>
    </div>
  );
}

export default DashBoardContainer;
