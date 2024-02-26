import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import Popular from "../Assets/popular.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useMyContext } from "../MyContext";
import MCard1 from "./Card3";

function PopularPicks() {
  const { value } = useMyContext();
  // const [movies, setMovies] = useState([
  //   {
  //     Title: "Top Gear: At the Movies",
  //     Year: "2011",
  //     imdbID: "tt2202611",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTQwMzk2NWEtMjU3ZC00NmNhLWE4NGQtMjQ0OGUyODEwN2U0XkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Top 40 Shitty Shark Movies",
  //     Year: "2013",
  //     imdbID: "tt3107552",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BNzhkODk3MWYtMWJmNy00MDlkLWE0YzEtNDU2NTY3Y2Q4YzkxXkEyXkFqcGdeQXVyMTQzMjU1NjE@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Top 1 Shark Movies",
  //     Year: "2013",
  //     imdbID: "tt3102724",
  //     Type: "movie",
  //     Poster: "N/A",
  //   },
  // ]);
  const [media, setMedia] = useState([]);
  const [filter, setFilter] = useState('rating')
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const apiKey = "37f889dd"; // Replace with your OMDb API key
        const fetchedMedia = await Promise.all(
          value.map(async (movie) => {
            const response = await fetch(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`
            );
            const data = await response.json();
            return data;
          })
        );
          if(filter === 'rating'){
            fetchedMedia.sort(
              (media1, media2) => media2.imdbRating - media1.imdbRating
            );
    
            const filtered = fetchedMedia.map((mediaItem) => ({
              ...mediaItem,
              Genre: mediaItem.Genre.split(", "),
            }));
    
            setMedia(filtered);
          }else if(filter === 'votes'){
            fetchedMedia.sort(
              (media1, media2) => media2.imdbVotes - media1.imdbVotes
            );
    
            const filtered = fetchedMedia.map((mediaItem) => ({
              ...mediaItem,
              Genre: mediaItem.Genre.split(", "),
            }));
    
            setMedia(filtered);
          }else if (filter === 'score') {
            fetchedMedia.sort((media1, media2) => {
              const score1 = parseInt(media1.Metascore);
              const score2 = parseInt(media2.Metascore);
          
              // Handle cases where Metascore is missing or not a number (NaN)
              if (!isNaN(score1) && !isNaN(score2)) {
                return score2 - score1;
              } else if (!isNaN(score1)) {
                return -1; // Place media1 before media2
              } else if (!isNaN(score2)) {
                return 1; // Place media2 before media1
              } else {
                return 0; // Keep the order unchanged
              }
            });
          
            const filtered = fetchedMedia.map((mediaItem) => ({
              ...mediaItem,
              Genre: mediaItem.Genre.split(", "),
            }));
          
            setMedia(filtered);
          }
        console.log("Media:", fetchedMedia);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMedia();
  }, [filter, value]);

  const handleFilter = (option) => {
    setFilter(option)
  }

  return (
    <div style={{ width: "80%", height: "100vh", overflow: "auto" }}>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "rgb(52 58 64 / 88%)",

        }}
      >
        <div className={styles.dashboard}>
          <div className={styles.resource}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
                src={Popular}
                style={{ height: "40px", width: "40px" }}
                alt="menu-btn"
              />
              <h4 style={{ margin: "0px", fontSize: "40px" }}>Popular Picks</h4>
            </div>
          </div>
          <div className={styles.dropdowns}>
            <div className={styles.dropdown}>
              <label>Sort By:</label>
              <select
                value={filter}
                onChange={(e) => {
                  handleFilter(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value='rating'>IMDB Rating</option>
                <option value='votes'>IMDB Votes</option>
                <option value='score'>Metascore</option>
              </select>
            </div>
            </div>
          <div>
            {/* Card */}
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {/* {Array.from(Array(20)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))} */}
                {media.map(({ imdbID }) => {
                  return <MCard1 key={imdbID} id={imdbID} />;
                })}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularPicks;
