import React, { useEffect } from "react";
import SideBar from "./SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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
    </div>
  );
}



export default DashBoardContainer;
