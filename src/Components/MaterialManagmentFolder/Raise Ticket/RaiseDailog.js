import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function RaiseDailog() {

  const [open, setOpen] = React.useState(false);

  const[selectedOption,setSelectOption]=useState("option")
  const handleSelectChange=(e)=>{
    console.log(e.target.value)
    setSelectOption(e.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
                defaultValue={""}
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

          </div>


        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} variant="contained" disableElevation style={{ width: "50%" }}>Close</Button>

          <Button onClick={() => {

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