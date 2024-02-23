import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Dialog, DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import {
  Chip,
  Stack,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import img from "../image/imageofmovie.png";
import "./MCard.css";

const MCard1 = ({ id }) => {
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
          body: JSON.stringify({ id }),
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
          sx={{
            maxWidth: 230,
            minWidth: 150,
            background: "#616161",
            color: "white",
            position: "relative",
          }}
          className="media"
          onClick={openDialogBox}
          style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="260"
              image={movies.Poster == "N/A" ? img : movies.Poster}
              onMouseLeave={() => console.log(29)}
              alt="green iguana"
            />
            <CardContent
              sx={{
                position: "absolute",
                top: "auto",
                bottom: 0,
                width: "100%",
                backgroundColor: "rgb(94 92 92 / 94%)", // Semi-transparent overlay
                visibility: "visible",
                transition: "opacity 0.3s ease, visibility 0.3s ease",
                opacity: 0,
                "&:hover": {
                  opacity: 1,
                },
                p: 1,
              }}
              className="media_child"
            >
<Typography gutterBottom sx={{ fontSize: "16px", color: "white" }} component="div">
  {movies?.Plot?.split(' ').slice(0, 15).join(' ')}{movies?.Plot?.split(' ').length > 15 ? ' ....' : ''}
</Typography>
              <Stack direction="row" spacing={1}>
                {movies?.Genre?.split(",").map((label, index) => (
                  <Chip
                    key={index}
                    label={label.trim()}
                    size="small"
                    sx={{ color: "#eeeeee", background: "rgb(58 58 58)" }}
                  />
                ))}
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                marginTop={0.8}
                color="#eeeeee"
              >
                <Typography variant="subtitle1">
                  Votes: {movies.imdbVotes}
                </Typography>
                <Typography variant="subtitle1">
                  Score: {movies.Metascore}
                </Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{ background: "rgb(14 14 14 / 65%)", p: 0.3, paddingInline: 1 }}
          >
            {/* <Button
              size="small"
              color="primary"
              sx={{ color: "#d3d6da", width: "100%" }}
            >
              ADD Video
            </Button> */}
            <Typography
              variant="subtitle1"
              sx={{ display:"flex", justifyContent: "center", color: "#d3d6da", width: "100%", backgroundColor: "black" }}
            >
               {movies.Title.substring(0, 20) || "null"}
            </Typography>
          </CardActions>
        </Card>
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{movies.Title}</DialogTitle>
        <DialogContent>
          <div>
            <iframe
              style={{ width: "100%" }}
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
              {clips.map((vid, index) => (
                <video
                  key={index}
                  style={{
                    height: "140px",
                    width: "220px",
                    margin: "10px",
                    borderRadius: "7px",
                  }}
                  src={vid.location}
                  title="Youtube Player"
                  frameborder="0"
                  onClick={(e) => handleClipClick(vid.location)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            variant="contained"
            disableElevation
            style={{ width: "100%" }}
          >
            Close
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default MCard1;
