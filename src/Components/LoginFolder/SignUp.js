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
          const response = await fetch('http://localhost:3001/api/register', {
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
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email) && !email.includes('gmail.com');
    }
  
    return (
      <div className="auth-container">
        {/* ... (logo and title) */}
        <form>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => {setEmail(e.target.value); setError('')}} />
  
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
          <button type="button" onClick={handleSignup}>
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