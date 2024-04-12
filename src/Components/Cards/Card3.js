import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
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
  CardActionArea,
  CardActions,
} from "@mui/material";
import img from "../../image/imageofmovie.png";
import "../MCard.css";

const MCard1 = ({ id }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [clips, setClips] = useState([]);
  const [adVideo, setAdVideo] = useState(null);
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
    fetchVids()
  };

  const fetchVids = async () => {
    try {
      const response = await fetch("https://truad-dashboard-backend.onrender.com/get-clips", {
        method: "POST",
        body: JSON.stringify({
          id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data.locations);
      const locations = data.locations.map((elem) => elem.location.split("?AWS")[0])
      setClips((prev) => [...prev, ...locations]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const fetchClips = async () => {
    try {
      const form = new FormData();
      form.append("file", adVideo);
      form.append("filename", adVideo.name);
      form.append("id", id);

      const response = await fetch("http://10.10.10.12:5000/stitch", {
        method: "POST",
        body: form
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
  console.log(data);

  const data2 = [];
  data.video_urls.map((elem) => data2.push(elem.split("?AWS")[0]))

  setClips(prev => [...prev, ...data2])
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleClipClick = (location) => {
    navigate("/dashboard/video", { state: { location } });
  };

  const handleAdVideoChange = (e) => {
    setAdVideo(e.target.files[0]);
  };
  return (
    <>
      <Grid item xs={2} sm={3} md={3} key={id}>
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
          style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="260"
              image={movies.Poster == "N/A" ? img : movies.Poster}
              onMouseLeave={() => console.log(29)}
              style={{objectFit: "fill"}}
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
              <Typography
                gutterBottom
                sx={{ fontSize: "16px", color: "white" }}
                component="div"
              >
                {movies?.Plot?.split(" ").slice(0, 15).join(" ")}
                {movies?.Plot?.split(" ").length > 15 ? " ...." : ""}
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
            <Typography
              variant="subtitle1"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#d3d6da",
                width: "100%",
                backgroundColor: "black",
                borderRadius:1.5
              }}
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
            {/* <img src={"https://upload.wikimedia.org/wikipedia/en/3/3f/Tanu_weds_Manu_poster.jpg"} style={{ width: "100%", borderRadius: "7px" }} alt="Img Not Found" /> */}

            {/* Origial */}
            {/* {video ? <video src={video} style={{width: "100%"}} controls/> :  <iframe
            style={{  width: "100%" }}
            src="https://www.youtube.com/embed/ermJ-iPg9xA?si=TvTA9sm4kr-fp3tz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>} */}
            {adVideo !== null ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <video
                  src={URL.createObjectURL(adVideo)}
                  style={{ width: "100%" }}
                  controls
                />
                <button onClick={fetchClips}>Generate Clips</button>
              </div>
            ) : (
              <div>
                <label>Add a Video</label>
                <input type="file" onChange={handleAdVideoChange} />
              </div>
            )}
            {clips.length > 0 && (
              <>
                <DialogTitle id="alert-dialog-title">
                  {"Available Clips"}
                </DialogTitle>
                <div style={{ display: "flex", overflow: "auto" }}>
                  {clips.map((vid) => {
                    return (
                      <video
                        style={{
                          height: "140px",
                          width: "220px",
                          margin: "10px",
                          borderRadius: "7px",
                        }}
                        controls
                        src={vid}
                        title="Youtube Player"
                        frameborder="0"
                        // allowFullScreen
                        onClick={(e) => handleClipClick(vid)}
                      />
                    );
                  })}
                </div>
              </>
            )}
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
