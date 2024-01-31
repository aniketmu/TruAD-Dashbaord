import React from 'react';
import cycle from '../Assets/circle.png'
import close from '../Assets/close.png'

const CustomButton = () => {
  return (
    <div style={{display: "flex", alignItems:"center", justifyContent: "space-between", background: "white", width: "300px", height: "30px", padding: "10px 20px", borderRadius: "10px"}}>
        <img src={cycle} style={{height: "25px", width: "25px"}} alt='cycle'/>
        <h4 style={{fontSize: "20px", color: "#00CED1"}}>Resource Management</h4>
        <img src={close} style={{height: "25px", width: "25px"}} alt='close-btn'/>
    </div>
  )
}

export default CustomButton