import React from "react";
// import styles from "./SignUp.module.css";
import logo from '../img/logo.png'

import './Auth.css'
import { useState } from 'react';

function SignUp({ handleSwichPage, setPopUp }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
  
    const handleSignup = async () => {
      const valid = isValidEmail(email);
  
      if (valid) {
        try {
          const response = await fetch('https://truad-dashboard-backend.onrender.com/api/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (response.status === 409) {
            return setError('User already exists');
            
          }

          if(response.status === 200){
            // const data = await response.json();
            // console.log(data);
            setPopUp(true)
            handleSwichPage()
          }
  
        } catch (error) {
          console.log(error);
        }
      } else {
        setError('Invalid email format');
      }
    };
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@(?:(?!gmail\.com)[^\s@]+\.)?truad\.com$/;
      return emailRegex.test(email);
  }
  
    return (
      <div className="auth-container">
         <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <img src={logo} alt="" style={{width:"80px",height:"80px" , borderRadius:"50%"}} />
           </div>
           <h2 style={{textAlign:"center"}}>SIGN UP</h2>
        <form>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => {setEmail(e.target.value); setError('')}} />
  
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
          <button type="button" onClick={handleSignup} style={{marginTop:"20px", borderRadius:"5px"}}>
            Sign Up
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <span onClick={handleSwichPage} style={{ margin: '20px 0', cursor: 'pointer' }}>
            Already Have an Account
          </span>
        </form>
      </div>
    );
  }
  
  export default SignUp;