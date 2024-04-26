
import React from 'react';
// import './Auth.css';
import { useState } from 'react';
import logo from '../../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import CircularProgress from '@mui/material/CircularProgress';


export default function ConfirmNewPass({ handleSwichPage }) {

    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState("");
    const [genrate, setGenrate] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const [loader, setloader]=useState(false);
    const handleGenrate = async() => {
        setloader(true)
        if(password !== confirmPassword){
            setloader(false)
            return setError("Please enter correct Password in both the fields")
        }

        try {
            const response = await fetch('https://truad-dashboard-backend.onrender.com/resetPassword', {
                method: "POST",
                body: JSON.stringify({

                    newPassword : password
                }),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${cookies.token}`
                }

            })

            if(response.status === 403){
                setloader(false)
                return setError("Unauthorized")
            }

            if(response.status === 404){
                setloader(false)
                return setError("User not found")
            }

            if(response.status === 400){
                setloader(false)
                return setError("Password must be at least 8 characters long and contain at least one special character, one uppercase character, and one number.")
            }
            setloader(false)
            setError("Password Updated")
            setTimeout(()=>{
                navigate('/')
            },3000)
            
        } catch (error) {
            setloader(false)
            console.log(error)
        }
    }



    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,height:'100vh',width:'100vw', backgroundColor:"rgb(18, 18, 18) ",color:"white"}}>
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
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Confirm New Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                <button type="button" onClick={handleGenrate} style={{ marginTop: "20px", borderRadius: "5px" }}>
                    Update
                </button>
                {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                {error=="Password Updated"?<p style={{ color: 'green' }}>{error}</p>:<p style={{ color: 'red' }}>{error}</p>}


            </form>
        </div>
        </div>
    );
}
