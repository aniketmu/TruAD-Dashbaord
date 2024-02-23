import React from 'react';
// import './Auth.css';
import { useState } from 'react';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function SignIn({ handleSwichPage }) {
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch('https://truad-dashboard-backend.onrender.com/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 401) {
        return setError("Invalid Password");
      }

      if(response.status === 404){
        return setError("User not found");
      }

      if(response.status === 200){
        const data = await response.json();
        // Cookies.set("token", data.token, {
        //   secure: true,
        //   sameSite: "strict",
        //   httpOnly: true,
        // });
        setCookie("user", data.token);
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={logo}
          alt=""
          style={{ width: '80px', height: '80px', borderRadius: '50%' }}
        />
      </div>
      <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}  style={{ marginTop: "20px", borderRadius: "5px" }}>
          Login
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <span
          onClick={handleSwichPage}
          style={{ margin: '20px 0', cursor: 'pointer' }}
        >
          Don't Have an Account
        </span>
      </form>
    </div>
  );
}
