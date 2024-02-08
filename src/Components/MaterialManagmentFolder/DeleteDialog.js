import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    return (
        <React.Fragment>
            <Button variant="contained" disableElevation style={{ width: "50%" }} onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Atfer clicking on agree we will delete this data from databade you can't recover it again.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} variant="contained" disableElevation style={{ width: "50%" }}>Disagree</Button>
                   
                    <Button onClick={()=>{
                        props.handleDelete(props.index);
                        setOpen(false)
                    }} variant="contained" disableElevation style={{ width: "50%" }}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}