import React, { useState, useEffect } from "react";
import MCard from "./Card";
import styles from "./Dashboard.module.css";
import Popular from '../Assets/popular.png'

function PopularPicks() {
  const [movies, setMovies] = useState([
    {
      Title: "Top Gear: At the Movies",
      Year: "2011",
      imdbID: "tt2202611",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTQwMzk2NWEtMjU3ZC00NmNhLWE4NGQtMjQ0OGUyODEwN2U0XkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg",
    },
    {
      Title: "Top 40 Shitty Shark Movies",
      Year: "2013",
      imdbID: "tt3107552",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzhkODk3MWYtMWJmNy00MDlkLWE0YzEtNDU2NTY3Y2Q4YzkxXkEyXkFqcGdeQXVyMTQzMjU1NjE@._V1_SX300.jpg",
    },
    {
      Title: "Top 1 Shark Movies",
      Year: "2013",
      imdbID: "tt3102724",
      Type: "movie",
      Poster: "N/A",
    },
  ]);
  const [media, setMedia] = useState([]);
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const apiKey = "37f889dd"; // Replace with your OMDb API key
        const fetchedMedia = await Promise.all(
          movies.map(async (movie) => {
            const response = await fetch(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`
            );
            const data = await response.json();
            return data;
          })
        );
        fetchedMedia.sort(
          (media1, media2) => media2.imdbRating - media1.imdbRating
        );

        const filtered = fetchedMedia.map((mediaItem) => ({
          ...mediaItem,
          Genre: mediaItem.Genre.split(", "),
        }));

        setMedia(filtered);
        console.log("Media:", fetchedMedia);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div style={{ width: "80%", height: "100vh", overflow: "auto" }}>
      <div
        style={{
          display: "flex",
          background: "grey",
          width: "100%",
          height: "60px",
          alignItems: "center",
          justifyContent: "start",
          paddingLeft: "50px",
        }}
      ></div>

      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          background: "#DCDCDC",
        }}
      >
        <div className={styles.dashboard}>
          <div className={styles.resource} style={{}}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
                src={Popular}
                style={{ height: "30px", width: "30px" }}
                alt="menu-btn"
              />
              <h4 style={{ margin: "0px" }}>Popular Picks</h4>
            </div>
          </div>
          <div>
            {media.map((elem) => (
              <MCard
                key={elem.imdbID}
                id={elem.imdbID}
                Name={elem.Title}
                Duration={elem.Runtime}
                Category={elem.Genre}
                NOE={"NA"}
                Seasons={"NA"}
                RD={elem.Released}
                AdClips={8}
                Poster={elem.Poster}
                IMDBRating={elem.imdbRating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularPicks;
