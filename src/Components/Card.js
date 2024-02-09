import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {useNavigate} from "react-router-dom"

function MCard({
  id,
  Name,
  Duration,
  Category,
  NOE,
  Seasons,
  RD,
  AdClips,
  Poster,
  video
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const [clips, setClips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

      fetchClips();

  }, [openDialog, id]);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const openDialogBox = () => {
    setOpenDialog(true);
  };

  const fetchClips = async () => {
    try {
      const response = await fetch("https://truad-dashboard-backend.onrender.com/get-clips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }), // Body should be stringified
      });

      const data = await response.json();
      setClips(data.locations);
    } catch (error) {
      console.error("Error fetching clips:", error);
    }
  };

  const handleClipClick = (location) => {
    navigate("/dashboard/video", {state: {location}})
  }

  return (
    <>
      <Row xs={1} md={4} className="g-4 p-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col key={idx}>
            <Card onClick={openDialogBox}>
              <Card.Img variant="top" src={Poster} style={{ height: "160px" }} />
              <Card.Body>
                <Card.Title className="fs-4">{Name}</Card.Title>
                <Card.Subtitle className="mt-1 fw-light text-start ps-2">
                  {Duration}
                </Card.Subtitle>
                <Card.Text className="text-start my-1 p-2 fw-normal">
                  {Category.map((cat) => cat + ", ")}
                  <br />
                  No of Episode : {NOE}
                  <br />
                  Available Clips: {AdClips || 0}
                  <br />
                  Season: {Seasons}
                </Card.Text>
                <footer className="footer text-start">
                  <cite title="Source Title">Release Date: {RD}</cite>
                </footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* <Dialog onClose={handleClose} open={openDialog} PaperComponent={StyledPaper}>
        <DialogTitle style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "bold" }}>
          {Name}
        </DialogTitle>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <iframe
            style={{ objectFit: "contain", width: "800px", height: "400px" }}
            src="https://www.youtube.com/embed/ermJ-iPg9xA?si=TvTA9sm4kr-fp3tz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {clips.map((clip, index) => (
              <div key={index} style={{ margin: "10px" }} onClick={(e) => handleClipClick(clip.location)}>
                <video src={clip.location} style={{ width: "200px", height: "150px", objectFit: "cover", borderRadius: "5px" }}></video>
                <span style={{ marginTop: "5px", fontSize: "0.8rem" }}>{clip.title}</span>
              </div>
            ))}
          </div>
        </div>
      </Dialog> */}
      <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {Name}
                </DialogTitle>
                <DialogContent>

                    <div>
                        {/* <img src={"https://upload.wikimedia.org/wikipedia/en/3/3f/Tanu_weds_Manu_poster.jpg"} style={{ width: "100%", borderRadius: "7px" }} alt="Img Not Found" /> */}
                        {video ? <video src={video} style={{width: "100%"}} controls/> :  <iframe
            style={{  width: "100%" }}
            src="https://www.youtube.com/embed/ermJ-iPg9xA?si=TvTA9sm4kr-fp3tz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>}
                        
                        <DialogTitle id="alert-dialog-title">
                            {"Available Clips"}
                        </DialogTitle>
                        <div style={{ display: "flex", overflow: "auto" }}>
                            {clips.map((vid) => {

                                return <video
                                    style={{ height: "140px", width: "220px", margin: "10px", borderRadius: "7px" }}

                                    src={vid.location}
                                    title="Youtube Player"
                                    frameborder="0"
                                // allowFullScreen
                                onClick={(e) => handleClipClick(vid.location)}
                                />


                            })}
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>

                    <button onClick={handleClose} variant="contained" disableElevation style={{ width: "100%" }}>Close</button>


                </DialogActions>
            </Dialog>
    </>
  );
}

// const StyledPaper = (props) => (
//   <Paper {...props} style={{ padding: "20px", minWidth: "1000px", maxWidth: "90%" }} />
// );

export default MCard;

