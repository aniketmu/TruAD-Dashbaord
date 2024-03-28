import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
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
    console.log(e.target.value)
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

            props.addRaiseNewData(text,selectedOption ,file)
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