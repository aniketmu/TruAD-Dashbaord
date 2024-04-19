import React, { useState, useEffect } from "react";
import styles from "../Dashboard/Dashboard.module.css";
import Popular from "../../Assets/popular.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useMyContext } from "../../MyContext";
import MCard1 from "../Cards/Card3";
import { sortByRating, sortByVotes, sortByScore } from "./Utils";
import './responsive.css'

function PopularPicks() {
  const { value } = useMyContext();
  const [media, setMedia] = useState([]);
  const [filter, setFilter] = useState("rating");
  const [searchTerm, setSearchTerm] = useState("");
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
          const filtered = sortByRating(fetchedMedia)
          setMedia(filtered);
        } else if (filter === "votes") {
          const filtered = sortByVotes(fetchedMedia)
          setMedia(filtered);
        } else if (filter === "score") {
          const filtered = sortByScore(fetchedMedia)
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

  const handleSearch = () => {
    const filtered = media.filter(
      (item) =>
        item.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // searchMovies();
    setMedia(filtered);
    setSearchTerm("");
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
        <div 
        className={styles.search_container} 
          style={{justifyContent:"center"}}
        >
          <div className="inputContainers"
          >

            <input
              type="text"
              placeholder="Please enter the resource name, actors, production company and placement client"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />

            <button onClick={handleSearch}>Search</button>

          </div>
        </div>
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
