import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function OprateDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [video, setVideo] = React.useState([{ video: "https://www.youtube.com/embed/VDrO044VHpY?si=7b2Fx75a9ZTuamkx" },
    { video: "https://www.youtube.com/embed/Q8O3256y9wo?si=u5wqEOnaiYp3Tku-" },
    { video: "https://www.youtube.com/embed/VDrO044VHpY?si=7b2Fx75a9ZTuamkx" },
    { video: "https://www.youtube.com/embed/Q8O3256y9wo?si=u5wqEOnaiYp3Tku-" },
    { video: "https://www.youtube.com/embed/VDrO044VHpY?si=7b2Fx75a9ZTuamkx" },
    { video: "https://www.youtube.com/embed/Q8O3256y9wo?si=u5wqEOnaiYp3Tku-" },
    { video: "https://www.youtube.com/embed/VDrO044VHpY?si=7b2Fx75a9ZTuamkx" },
    { video: "https://www.youtube.com/embed/Q8O3256y9wo?si=u5wqEOnaiYp3Tku-" },
    { video: "https://www.youtube.com/embed/VDrO044VHpY?si=7b2Fx75a9ZTuamkx" },
    { video: "https://www.youtube.com/embed/Q8O3256y9wo?si=u5wqEOnaiYp3Tku-" },
    { video: "https://www.youtube.com/embed/VDrO044VHpY?si=7b2Fx75a9ZTuamkx" },
    { video: "https://www.youtube.com/embed/Q8O3256y9wo?si=u5wqEOnaiYp3Tku-" },
    { video: "https://www.youtube.com/embed/VDrO044VHpY?si=7b2Fx75a9ZTuamkx" }
    ])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <React.Fragment>
            <Button variant="contained" disableElevation style={{ width: "50%" }} onClick={handleClickOpen}>
                Oprate
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Selected material image"}
                </DialogTitle>
                <DialogContent>

                    <div>
                        <img src={props.thumbnail} style={{ width: "100%", borderRadius: "7px" }} alt="Img Not Found" />
                        <DialogTitle id="alert-dialog-title">
                            {"Available Clips"}
                        </DialogTitle>
                        <div style={{ display: "flex", overflow: "auto" }}>
                            {video.map((vid) => {

                                return <iframe
                                    style={{ height: "140px", width: "220px", margin: "10px", borderRadius: "7px" }}

                                    src={vid.video}
                                    title="Youtube Player"
                                    frameborder="0"
                                // allowFullScreen
                                />


                            })}
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} variant="contained" disableElevation style={{ width: "100%" }}>Close</Button>


                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}