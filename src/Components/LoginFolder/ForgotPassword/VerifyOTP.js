

import React from 'react';
// import './Auth.css';
import { useState } from 'react';
import logo from '../../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import CircularProgress from '@mui/material/CircularProgress';


export default function VerifyOTP({ handleSwichPage }) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState("");
    const [genrate, setGenrate] = useState(false);
    const [otp, setOtp] = useState(0)
    const [cookies, setCookie] = useCookies(["token"]);
    const [loader, setloader]=useState(false);

    const handleGenrate = async () => {
        setloader(true)
        try {
            const response = await fetch("https://truad-dashboard-backend.onrender.com/api/forgot", {  //https://truad-dashboard-backend.onrender.com/api/register
                method: "POST", 
                body: JSON.stringify({
                    email
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            
            if(response.status === 404){
                setloader(false)
                return setError("User does not exist")
            }

            if(response.status === 500){
                setloader(false)
                return setError("Something went Wrong")
            }

            if(response.status === 200){
                setloader(false)
                return setGenrate(true)
            }
        } catch (error) {
            setloader(false)
            console.log(error)
        }
    }

    // /ConfirmNewPass

    const handleVerify= async()=>{
        setloader(true)
        console.log(otp)
        try {
            const response  = await fetch("https://truad-dashboard-backend.onrender.com/verifyOtp", {
                method: "POST",
                body: JSON.stringify({
                    email,
                    otp
                }),
                headers: {
                    "Content-Type" : "application/json"
                }
            })

            if(response.status ===  403){
                setloader(false)
                return setError("Invalid OTP")
            }

            if(response.status === 404){
                setloader(false)
                return setError("User not found")
            }

            if(response.status === 200){
                const data = await response.json()
                console.log("data", data)
                setloader(false)
                setCookie("token", data.token)
                navigate('/ConfirmNewPass')
            }
        } catch (error) {
            setloader(false)
            console.log(error)
        }
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,height:'100vh',width:'100vw', backgroundColor:"rgb(18, 18, 18) "}}>
        <div className="auth-container" style={{backgroundColor:"black",color:"white"}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    src={logo}
                    alt=""
                    style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                />
            </div>
            <h2 style={{ textAlign: 'center' }}>Forgot Password</h2>
            <form>
                <label>Enter Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {loader? <CircularProgress color='inherit' sx={{margin:"auto"}}/> :
                <button type="button" onClick={handleGenrate} style={{ marginTop: "20px", borderRadius: "5px" }}>
                    Generate OTP
                </button>
}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                {genrate ? <div>

                    <form>
                        <label>Enter OTP:</label>

                        <input type="email" value={otp} onChange={(e) => setOtp(e.target.value)} />
                        {loader? <CircularProgress color='inherit' sx={{margin:"auto"}}/> :
                        <button type="button"  style={{ marginTop: "20px", borderRadius: "5px" }} onClick={handleVerify} >
                            Verify OTP
                        </button>
}
                    </form>

                </div> : <div></div>}


            </form>
        </div>
        </div>
    );
}
