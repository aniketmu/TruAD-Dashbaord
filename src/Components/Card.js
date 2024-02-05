import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";

function MCard({
  Name,
  Duration,
  Category,
  NOE,
  Seasons,
  RD,
  AdClips,
  Poster,
}) {
  const [openDialog, handleDisplay] = React.useState(false);

  const handleClose = () => {
    handleDisplay(false);
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };

  const dialogStyle = {
    padding: "50px",
    width: "80%", // Set the maximum width of the dialog
  };

  const buttonStyle = {
    width: "10rem",
    fontSize: "1.5rem",
    height: "2rem",
    padding: "5px",
    borderRadius: "10px",
    backgroundColor: "green",
    color: "white",
    border: "2px solid yellow",
  };
  return (
    <>
      <Row xs={1} md={4} className="g-4 p-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col key={idx}>
            <Card onClick={openDialogBox}>
              <Card.Img
                variant="top"
                src={Poster}
                style={{ height: "160px" }}
              />
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
      <Dialog
        onClose={handleClose}
        open={openDialog}
        PaperComponent={StyledPaper}
      >
        
        <DialogTitle> {Name} </DialogTitle>
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent:"center" }}>
        <iframe style={{ objectFit: "contain" }} width="800" height="400" src="https://www.youtube.com/embed/ermJ-iPg9xA?si=TvTA9sm4kr-fp3tz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </Dialog>
    </>
  );
}

const StyledPaper = (props) => (
  <Paper {...props} style={{ padding: "20px", minWidth: "1000px" }} />
);

export default MCard;
