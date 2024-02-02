import React from 'react';
import './Auth.css'
import { useState } from 'react';
import logo from '../img/logo.png'
import { useNavigate } from 'react-router-dom';

export default function SignIn({ handleSwichPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    

    const handleLogin = () => {
        // Add your login logic 
        console.log('Logging in with:', email, password);
        navigate("/dashboard/");
    }
    return (
        <div className="auth-container">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={logo} alt="" style={{ width: "80px", height: "80px", borderRadius: "50%", }} />
            </div>
            <h2 style={{ textAlign: "center" }}>LOGIN</h2>
            <form>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="button" onClick={handleLogin} style={{ marginTop: "20px", borderRadius: "5px" }}>Login</button>
                <span onClick={handleSwichPage} style={{ margin: "20px 0", cursor: "pointer" }}>Don't Have an Account</span>
            </form>
        </div>
    )
}
