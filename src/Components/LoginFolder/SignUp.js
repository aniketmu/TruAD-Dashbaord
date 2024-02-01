import React from "react";
// import styles from "./SignUp.module.css";
import logo from '../img/logo.png'

import './Auth.css'
import { useState } from 'react';

function SignUp({ handleSwichPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name ,setName]=useState("");

    const handleSignup = () => {
        // Add your signup logic here
        console.log('Signing up with:', email, password);
    };
    return (

        <div className="auth-container">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src={logo} alt="" style={{width:"80px",height:"80px" , borderRadius:"50%", border:"1px solid white"}} />
            </div>
            <h2 style={{textAlign:"center"}}>SIGN UP</h2>
            <form>
                <label>Name:</label>
                <input type="name" value={name} onChange={(e) => setName(e.target.value)} />

               
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="button" onClick={handleSignup}>Sign Up</button>
                <span onClick={handleSwichPage} style={{margin:"20px 0" ,cursor:"pointer"}}>Already Have an Account</span>
            </form>
        </div>


    );
}

export default SignUp;
