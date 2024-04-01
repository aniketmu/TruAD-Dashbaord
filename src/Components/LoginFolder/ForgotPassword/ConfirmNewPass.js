
import React from 'react';
// import './Auth.css';
import { useState } from 'react';
import logo from '../../img/logo.png';
import { useNavigate } from 'react-router-dom';


export default function ConfirmNewPass({ handleSwichPage }) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState("");
    const [genrate, setGenrate] = useState(false);

    const handleGenrate = () => {
        setGenrate(!genrate)
    }



    return (
        <div className="auth-container">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    src={logo}
                    alt=""
                    style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                />
            </div>
            <h2 style={{ textAlign: 'center' }}>Reset Password</h2>
            <form>
                <label>New Password :</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Confirm New Password:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <button type="button" onClick={handleGenrate} style={{ marginTop: "20px", borderRadius: "5px" }}>
                    Update
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}


            </form>
        </div>
    );
}
