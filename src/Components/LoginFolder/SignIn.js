import React from 'react';
import { useState } from 'react';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import CircularProgress from '@mui/material/CircularProgress';


export default function SignIn({ handleSwichPage }) {
  const [cookies, setCookie] = useCookies(["user", "userdata"]);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [isChecked,setIsChecked]=useState(false)
  const [loader, setloader]=useState(false);

  const handleForget = () => {
    navigate('/verifyotp')
  }

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
        setloader(false)
        return setError("Invalid Password");
      }

      if (response.status === 404) {
        setloader(false)
        return setError("User not found");
      }

      if (response.status === 403) {
        setloader(false)
        return setError("User Email is not verified");
      }

      if (response.status === 200) {
        const data = await response.json();
        // Cookies.set("token", data.token, {
        //   secure: true,
        //   sameSite: "strict",
        //   httpOnly: true,
        // });
        setCookie("user", data.token);
        setCookie("userdata", data);
        setloader(false)
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
        <input type={isChecked?"text":"password"} value={password} onChange={(e) => setPassword(e.target.value)} />
        <div style={{marginTop:"3px"}}>
          <input type="checkbox" id="pass" checked={isChecked} onChange={()=>{setIsChecked(!isChecked)}}  />
        <label for="pass" style={{marginLeft:"5px"}}> Show Password</label></div>
        {
          loader? <CircularProgress color='inherit' sx={{margin:"auto"}}/> :   <button type="button" onClick={()=>{
            handleLogin()
            setloader(true)
            }} style={{ marginTop: "20px", borderRadius: "5px" }}>
          Login
        </button>
        }
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div style={{ margin: '20px 0', display: "flex", justifyContent: 'space-between' }}>
          <span
            onClick={handleSwichPage}
            style={{ cursor: 'pointer', }}
          >
            Don't Have an Account
          </span>
          <span style={{ color: "red", cursor: "pointer" }} onClick={handleForget}>Forgot Password</span>
        </div>

      </form>
    </div>
  );
}
