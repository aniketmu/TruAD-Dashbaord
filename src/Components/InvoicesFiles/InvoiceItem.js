import React, { useEffect, useState } from 'react'

// status:'Paid',
// invoiceNo:"Invoice 1003",
// invoiceDate:"Feb 12 2024",
// companyName:"TruAd  Pvt. Ltd.",
// emailId:"qayyum@truad.co",
// ammount:128000,
// lastSeen:"Opened 5 day ago",
function InvoiceItem(props) {


    return (
        <div className='InvoiceItemContainer'>
            <div className={props.data.status} style={{ height: "80%", marginLeft: '5px', borderRadius: "7px", width: "7%", display: "flex", justifyContent: "center", alignItems: "center" }}><span>{props.data.status}</span></div>
            <div>

                <h6 style={{ margin: "0", padding: "0" }}>{props.data.invoiceNo}</h6>
                <p style={{ margin: "0", padding: "0" }}>{props.data.invoiceDate}</p>
            </div>
            <div>
                <h6 style={{ margin: "0", padding: "0" }}>{props.data.companyName}</h6>
                <p style={{ margin: "0", padding: "0" }}>{props.data.emailId}</p>
            </div>
            <div>
                <h6 style={{ margin: "0", padding: "0" }}>Rs. {props.data.ammount}</h6>
                <p style={{ margin: "0", padding: "0" }}>{props.data.lastSeen}</p>
            </div>
            <div style={{ height: "70%", marginRight: "10px" }}>
                <span className='patreview'>Pay</span>
                <span className='patreview'>View</span>
                <span className='patreview'>Send for review</span>
            </div>
        </div>
    )
}

export default InvoiceItem