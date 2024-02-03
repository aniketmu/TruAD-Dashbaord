import React from 'react';
// styling
import './Checkout.css';
// images

const PopUp = props => {
    // function that takes boolean as param to conditionally display popup
    const { setPopUp } = props 

    return (
        <div className="PopUp">
            <div className="pu-content-container">
                <h1>You have been sucessfully registered!</h1>
            </div>
            {/* button controls */}
            <div className="pu-button-container">
                <button onClick={()=> setPopUp(false)}>OK</button>
            </div>
        </div>
    );
}

export default PopUp;