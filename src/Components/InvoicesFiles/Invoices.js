import React, { useEffect, useState } from 'react'
import './invoices.css'
import InvoiceItem from './InvoiceItem';



const data = [
  {
    status: 'Refunded',
    invoiceNo: "Invoice 1003",
    invoiceDate: "Feb 12 2024",
    companyName: "TruAd  Pvt. Ltd.",
    emailId: "qayyum@truad.co",
    ammount: 128000,
    lastSeen: "Opened 5 day ago",

  },
  {
    status: 'Pending',
    invoiceNo: "Invoice 1003",
    invoiceDate: "Feb 12 2024",
    companyName: "TruAd  Pvt. Ltd.",
    emailId: "qayyum@truad.co",
    ammount: 128000,
    lastSeen: "Opened 5 day ago",

  }, {
    status: 'Overdue',
    invoiceNo: "Invoice 1003",
    invoiceDate: "Feb 12 2024",
    companyName: "TruAd  Pvt. Ltd.",
    emailId: "qayyum@truad.co",
    ammount: 128000,
    lastSeen: "Opened 5 day ago",

  },
  {
    status: 'Pending',
    invoiceNo: "Invoice 1003",
    invoiceDate: "Feb 12 2024",
    companyName: "TruAd  Pvt. Ltd.",
    emailId: "qayyum@truad.co",
    ammount: 128000,
    lastSeen: "Opened 5 day ago",

  },
  {
    status: 'Overdue',
    invoiceNo: "Invoice 1003",
    invoiceDate: "Feb 12 2024",
    companyName: "TruAd  Pvt. Ltd.",
    emailId: "qayyum@truad.co",
    ammount: 128000,
    lastSeen: "Opened 5 day ago",

  },
  {
    status: 'Pending',
    invoiceNo: "Invoice 1003",
    invoiceDate: "Feb 12 2024",
    companyName: "TruAd  Pvt. Ltd.",
    emailId: "qayyum@truad.co",
    ammount: 128000,
    lastSeen: "Opened 5 day ago",

  },
  {
    status: 'Overdue',
    invoiceNo: "Invoice 1003",
    invoiceDate: "Feb 12 2024",
    companyName: "TruAd  Pvt. Ltd.",
    emailId: "qayyum@truad.co",
    ammount: 128000,
    lastSeen: "Opened 5 day ago",

  },
  {
    status: 'Paid',
    invoiceNo: "Invoice 1003",
    invoiceDate: "Feb 12 2024",
    companyName: "TruAd  Pvt. Ltd.",
    emailId: "qayyum@truad.co",
    ammount: 128000,
    lastSeen: "Opened 5 day ago",

  },
  {
    status: 'Pending',
    invoiceNo: "Invoice 1003",
    invoiceDate: "Feb 12 2024",
    companyName: "TruAd  Pvt. Ltd.",
    emailId: "qayyum@truad.co",
    ammount: 128000,
    lastSeen: "Opened 5 day ago",

  },
  {
    status: 'Paid',
    invoiceNo: "Invoice 1003",
    invoiceDate: "Feb 12 2024",
    companyName: "TruAd  Pvt. Ltd.",
    emailId: "qayyum@truad.co",
    ammount: 128000,
    lastSeen: "Opened 5 day ago",

  }
]


function Invoices() {

  const [catagory, setCatagory] = useState("All")
  const [list, setList] = useState(data);

  const [headings, setHeading] = useState([
    { name: "All", isActive: true },
    { name: "Paid", isActive: false },
    { name: "Pending", isActive: false },
    { name: "Refunded", isActive: false },
    { name: "Overdue", isActive: false },
  ])

  function handleActive(i) {
    const newHead = [...headings];
    newHead.forEach((e, ind) => {
      if (i === ind) {
        e.isActive = true;
      } else {
        e.isActive = false;
      }
    })

  }
  useEffect(() => {
    if (catagory === "All") {
      setList(data);
    }
    else {
      const d = [...data];
      const newArr = d.filter((e) => {
        return e.status === catagory;
      })
      setList(newArr);
    }
  }, [catagory])


  return (
    <div style={{ width: "80%", backgroundColor: "#6c757d" }}>

      <h1 style={{ textAlign: "center", backgroundColor: '#212529', margin: '10px', borderRadius: "7px", boxShadow: "rgba(0, 0, 0, 0.4) 0px 3px 8px" ,color:"white"}}>Invoices</h1>

      <div style={{ display: "flex", margin: "10px", justifyContent: "space-between", backgroundColor: "#343a40", alignItems: 'center', boxShadow: "rgba(0, 0, 0, 0.4) 0px 3px 8px", borderRadius: "7px" }}>
        <div className='ch1p'>

          {headings.map((e, i) => {
            return <div key={i} className='ch1' style={e.isActive ? { backgroundColor: "blue", color: "white" } : { backgroundColor: "white" }} onClick={() => {
              setCatagory(e.name)
              handleActive(i);
            }} >
              <span>{e.name}</span>
            </div>
          })}

        </div>
        <div style={{ width: "49%" }}>
          <div className='ch2'>
            <input className='inputCapture' type="text" />
            <button><span>search</span></button>
          </div>

        </div>
      </div>

      <div style={{ display: "flex", margin: "10px", justifyContent: "space-between", backgroundColor: "#343a40", alignItems: 'center', boxShadow: "rgba(0, 0, 0, 0.4) 0px 3px 8px", borderRadius: "7px" }} >
        <div style={{ width: "100%", margin: "10px" }}>
          {list.map((e) => {
            return <InvoiceItem data={e} />
          })}
        </div>


      </div>

    </div>

  )
}

export default Invoices;