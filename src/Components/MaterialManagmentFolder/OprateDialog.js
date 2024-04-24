import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

export default function OprateDialog(props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [video, setVideo] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        console.log("error=", error);
      }
      const response = await fetch(
        "https://truad-dashboard-backend.onrender.com/get-video",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      const video = data.data.map((el) => ({
        ...el,
        location: el.location.split("?")[0],
      }));
      if (video.length > 0) {
        setVideo(video);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Button
        variant="contained"
        disableElevation
        style={{ width: "50%" }}
        onClick={handleClickOpen}
      >
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
            <img
              src={props.thumbnail}
              style={{ width: "100%", borderRadius: "7px" }}
              alt="Img Not Found"
            />
            <DialogTitle id="alert-dialog-title">
              {"Available Clips"}
            </DialogTitle>
            <div style={{ display: "flex", overflow: "auto" }}>
              {video.map((vid) => {
                return (
                  <div>
                    {" "}
                    <video
                      style={{
                        height: "140px",
                        width: "220px",
                        margin: "0px 10px",
                        borderRadius: "7px",
                      }}
                      title="Video Player"
                      controls
                    >
                      <source src={vid.location} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <button
                      style={{
                        height: "40px",
                        width: "220px",
                        margin: "0px 10px",
                        borderRadius: "7px",
                      }}
                      onClick={() => {
                        console.log(props.thumbnail);
                        navigate("/dashboard/actionpage/", {
                          state: { video: vid.location, img: props.thumbnail },
                        });
                      }}
                    >
                      Use it
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            disableElevation
            style={{ width: "100%" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
