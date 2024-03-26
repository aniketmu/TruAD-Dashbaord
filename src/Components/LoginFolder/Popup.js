import React from 'react';
// styling
import './Checkout.css';
// images

import { useNavigate } from 'react-router-dom';

const PopUp = props => {
    // function that takes boolean as param to conditionally display popup
    const { setPopUp } = props
    const navigate = useNavigate();

    return (
        <div className="PopUp">
            <div className="pu-content-container">
                <h3>We have successfully sent a verification link on your mail please verify then login </h3>
            </div>
            {/* button controls */}
            <div className="pu-button-container">
                <button onClick={() => {
                setPopUp(false);
                navigate('/');
                }
                }>OK</button>
            </div>
        </div>
    );
}

export default PopUp;