import React, { useState, useEffect } from "react";
import styles from "./Dashboard/Dashboard.module.css";
import Popular from "../Assets/popular.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useMyContext } from "../MyContext";
import MCard1 from "./Cards/Card3";

function PopularPicks() {
  const { value } = useMyContext();
  const [media, setMedia] = useState([]);
  const [filter, setFilter] = useState("rating");
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
        if (filter === "rating") {
          fetchedMedia.sort(
            (media1, media2) => media2.imdbRating - media1.imdbRating
          );

          const filtered = fetchedMedia.map((mediaItem) => ({
            ...mediaItem,
            Genre: mediaItem.Genre.split(", "),
          }));

          setMedia(filtered);
        } else if (filter === "votes") {
          fetchedMedia.sort(
            (media1, media2) => media2.imdbVotes - media1.imdbVotes
          );

          const filtered = fetchedMedia.map((mediaItem) => ({
            ...mediaItem,
            Genre: mediaItem.Genre.split(", "),
          }));

          setMedia(filtered);
        } else if (filter === "score") {
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
    setFilter(option);
  };

  return (
    <div
      style={{ width: "80%", flexGrow: "1", height: "100vh", overflow: "auto" }}
    >
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                src={Popular}
                style={{ height: "40px", width: "40px" }}
                alt="menu-btn"
              />
              <h4 style={{ margin: "0px", fontSize: "40px" }}>Popular Picks</h4>
            </div>
          </div>
          <div className={styles.dropdowns}>
            <div
              className={styles.dropdown}
              style={{ justifyContent: "center", width: "100%" }}
            >
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
                <option value="rating">IMDB Rating</option>
                <option value="votes">IMDB Votes</option>
                <option value="score">Metascore</option>
              </select>
            </div>
          </div>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
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
