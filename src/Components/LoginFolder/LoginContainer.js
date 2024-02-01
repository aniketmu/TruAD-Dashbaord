import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import logo from '../img/logo.png'

function LoginContainer() {
  const [toggle, setToggle] = useState(true);
  const handleSwichPage = () => {
    setToggle(!toggle);
  };
  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", }}>

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
          <SignUp handleSwichPage={handleSwichPage} toggle={handleSwichPage} />
        )}
      </div>
    </div>
  );
}

export default LoginContainer;
