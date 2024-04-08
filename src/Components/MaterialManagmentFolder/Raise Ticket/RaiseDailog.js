import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



function RaiseDailog(props) {

  const [open, setOpen] = React.useState(false);
  const [file,setFile]=React.useState("");

  const[selectedOption,setSelectOption]=useState("option")
  const [text,setText]=useState("")
  const handleText=(e)=>{
    console.log(text)
    setText(e.target.value)
  }
  const handleSelectChange=(e)=>{
    setSelectOption(e.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFile= (e)=> {
   const url= URL.createObjectURL(e.target.files[0])
   setFile(url);

  }

  const addTicke=async()=>{
    try {
      const formData = new FormData();
      formData.append('subject', text); // Assuming 'text' is defined elsewhere in your code
      formData.append('supportTeam', selectedOption); // Assuming 'selectedOption' is defined elsewhere in your code
      formData.append('viewImage', file); // Assuming 'file' is defined elsewhere in your code
  
      const response= await fetch(`https://truad-dashboard-backend.onrender.com/api/user/${props.user_email}`, {
        method: 'POST', // It's good practice to use uppercase HTTP methods
        // headers: {
        //   "Content-Type": "multipart/form-data"
        // },
        body: formData,
        // Don't set Content-Type for FormData; the browser will handle it
      });
      console.log(response)
      // if(!response.ok){
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
       
      const data = await response.json();
      console.log('Ticket Created Successfully:', data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <React.Fragment>
      <button variant="contained" disableElevation onClick={handleClickOpen} ><span>+</span>Raise New Ticket</button>
      {/* <Button variant="contained" disableElevation  onClick={handleClickOpen} >
        Delete
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Raise A New Ticket"}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description"> */}
          <div >
            <div className="mb-3">
              <label htmlFor="feedback">Write Your Issue Below:</label>
              <br />
              <textarea
                id="feedback"
                rows={5}
                cols={60}
                name="feedback"
                placeholder="Enter your feedback here"
                defaultValue={text}
                onChange={handleText}
              />

            </div>
            <div className="mb-3">
              <label >
                Select Support Team
              </label>
              <br/>
               <select  value={selectedOption} onChange={handleSelectChange} style={{width:"100%"}}> 
                <option value="option">Select Option</option>
                <option value="IT Department">IT Department</option>
                <option value="Sales And Marketing Department">Sales And Marketing Department</option>
                <option value="Account Department">Account Department</option>
                <option value="HR Department">HR Department</option>
                
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-3">
              <label >
               Upload Screenshot
              </label>
              <br/>
                <input type='file' onChange={handleFile}/>
            </div>

          </div>


        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} variant="contained" disableElevation style={{ width: "50%" }}>Close</Button>

          <Button onClick={() => {

            // props.addRaiseNewData(text,selectedOption ,file)
            addTicke()
            // props.setrender(!props.render)
            setOpen(false)
          }} variant="contained" disableElevation style={{ width: "50%" }}>
            Raise Ticket
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default RaiseDailog