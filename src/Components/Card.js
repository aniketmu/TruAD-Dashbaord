import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Dialog , DialogContent } from "@mui/material";
import {DialogTitle} from "@mui/material";
import {DialogActions} from "@mui/material";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

import { useNavigate } from "react-router-dom";

import { Chip, Stack } from "@mui/material";
import img from '../image/imageofmovie.png'

function MCard({ id }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [clips, setClips] = useState([]);
  const [movies, setMovies] = useState({
    Poster: "",
    Title: "null",
  });
  const navigate = useNavigate();
  const theme = useTheme();

  const searchMovies = async () => {
    const apiKey = "37f889dd"; // Replace with your OMDb API key
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
      );
      setMovies(response.data);
      // Log the array of movies
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchMovies();
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
      const response = await fetch(
        "https://truad-dashboard-backend.onrender.com/get-clips",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }), // Body should be stringified
        }
      );

      const data = await response.json();
      setClips(data.locations);
    } catch (error) {
      console.error("Error fetching clips:", error);
    }
  };

  const handleClipClick = (location) => {
    navigate("/dashboard/video", { state: { location } });
  };

  return (
    <>
      <Grid item xs={2} sm={4} md={4} key={id}>
        <Card
          sx={{ display: "flex", flexWrap: "nowrap", borderRadius: "10px" }} onClick={openDialogBox}
        >
          <Box sx={{ borderRadius: "10px" }}>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                objectFit: "cover",
                height: "200px",
                borderRadius: "5px",
              }}
              image={(movies.Poster=='N/A')?img:movies.Poster}
              alt="Live from space album cover"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "150px",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h6">
                {movies.Title.substring(0,20) || "null"}
              </Typography>
              <Stack direction="row" spacing={1}>
                {movies?.Genre?.split(",").map(
                  (label, index /* Check if Genre exists and then map */) => (
                    <Chip key={index} label={label.trim()} size="small" /> // Added key prop for React list
                  )
                )}
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Votes: {movies.imdbVotes}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Score: {movies.Metascore}
                </Typography>
              </Stack>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      {/* <Row xs={1} md={4} className="g-4 p-4">
        {movies.map((movie,i) => (
          <Col key={i}>
            <Card onClick={openDialogBox}>
              <Card.Img variant="top" src={movie.Poster} style={{ height: "160px" }} />
              <Card.Body>
                <Card.Title className="fs-4">{movie.Title}</Card.Title>
                <Card.Subtitle className="mt-1 fw-light text-start ps-2">
                  {movie.Duration || 'test'}
                </Card.Subtitle>
                <Card.Text className="text-start my-1 p-2 fw-normal">
                  
                  {movie.Genre.map((cat) => cat + ", ")}
                  <br />
                  No of Episode : {movie.NOE || 0}
                  <br />
                  Available Clips: {movie.AdClips || 0}
                  <br />
                  Season: {movie.Seasons || null}
                </Card.Text>
                <footer className="footer text-start">
                  <cite title="Source Title">Release Date: {movie.Year}</cite>
                </footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}

      <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {movies.Title}
                </DialogTitle>
                <DialogContent>

                    <div>
                        <iframe
            style={{  width: "100%" }}
            src="https://www.youtube.com/embed/ermJ-iPg9xA?si=TvTA9sm4kr-fp3tz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
                        
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
