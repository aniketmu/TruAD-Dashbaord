import React, { useState, useEffect } from "react";
import PopUp from "./Popup";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import logo from '../img/logo.png'
import { useNavigate } from 'react-router-dom'
import { CookiesProvider, useCookies } from "react-cookie";
import './Checkout.css'
import './Auth.css'

function LoginContainer() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [popUp, setPopUp] = useState(false)
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const handleSwichPage = () => {
    setToggle(!toggle);
  };

  const duringPopUp = popUp ? " during-popup" : ""

  useEffect(() => {
    if(cookies.user){
      navigate('/dashboard')
    }
    // removeCookie("user", {path:'/'})
  }, [cookies])
  
  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", }} className={"Checkout" + duringPopUp}>
      {popUp && <PopUp setPopUp={setPopUp}/>}
      <div style={{ width: "40%", backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center"  }}>
        <div
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center"
          }}
        >
          <div  style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <img
              src={logo}
              height="200px"
              width="200px"
            />
          </div>
          <div>
            <p style={{ color: "white", fontSize: "25px" ,margin:"30px",textShadow:"1px 1px red"}}>
              TruAD is an intelligent technology company backed by a strong team of
              researchers, Oscar winners and data scientists
            </p>
          </div>

        </div>


      </div>
      <div
        style={{
          width: "60%",
          // backgroundColor: "#2d3436",
          backgroundColor:"rgb(18, 18, 18)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // flexDirection: "column",
          color: "white",

        }}
      >

        {toggle ? (
          <SignIn handleSwichPage={handleSwichPage} toggle={handleSwichPage} />
        ) : (
          <SignUp handleSwichPage={handleSwichPage} toggle={handleSwichPage} setPopUp={setPopUp}/>
        )}
      </div>
    </div>
  );
}

export default LoginContainer;
