import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import Chatter from "./ChatBoxContainer/Chat";

export default function ChatBox() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ position: "fixed", bottom: "10px", right: "10px" ,borderRadius:"10px"}}>
      {/* <Button variant="contained" disableElevation style={{ width: "100%" ,zIndex:"999999",backgroundColor:"green" }} onClick={handleClickOpen}>
            <HeadsetMicIcon/>   Chat With Us
            </Button> */}
      {/* <Dialog style={{position:"fixed" , bottom:"10px", right:"10px"}}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Selected material image"}
                </DialogTitle>
                <DialogContent>

                
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} variant="contained" disableElevation style={{ width: "20vw" }}>Close</Button>


                </DialogActions>
            </Dialog> */}
      {open ? (
        <div style={{ width: "20vw", height: "70vh", backgroundColor: "white", borderRadius: "10px"}}>
          <Button onClick={handleClose} >
          <ExitToAppIcon/> close
          </Button>
          <Chatter />
        </div>
      ) : (
        <Button
          variant="contained"
          disableElevation
          style={{ width: "100%", zIndex: "999999", backgroundColor: "green" }}
          onClick={handleClickOpen}
        >
          <HeadsetMicIcon /> Chat With Us
        </Button>
      )}
    </div>
  );
}
