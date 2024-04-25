import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import CustomButton from "../CustomButton";
import MCard1 from "../Cards/Card3";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useMyContext } from "../../MyContext";
import DataNotFound from "../DataNotFound";
import SegmentIcon from "@mui/icons-material/Segment";
import { CssBaseline, Stack, Avatar } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import './resposive.css'

const Dashhboard = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCerti, setSelectedCerti] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [openDialog, handleDisplay] = useState(false);
  const [add, setAdd] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [clipDuration, setClipDuration] = useState(10);
  const [poster, setPoster] = useState("");
  const [movies, setMovies] = useState([]);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const { value, setValue } = useMyContext();

  const searchMovies = async () => {
    const apiKey = "37f889dd"; // Replace with your OMDb API key
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm ? searchTerm : "Comedy"
        }&apikey=${apiKey}`
      );
      setMovies(response.data.Search);
      setValue(response.data.Search);
      setSearchTerm("");
      // Log the array of movies
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const selectedMovies = async () => {
    const apiKey = "37f889dd"; // Replace with your OMDb API key
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${selectedCategory ? selectedCategory : "Top Movie"
        }&apikey=${apiKey}`
      );
      setMovies(response.data.Search);
      // Log the array of movies
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    searchMovies();
  }, []);

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const [mediaArray, setMediaArray] = useState([]);

  const handleClose = () => {
    handleDisplay(false);
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };
  const typeOptions = ["All", "TV Show", "Movie"];

  const categories = [];
  const certifications = [];

  const filterCategories = () => {
    mediaArray.forEach((media) => {
      media.category.forEach((category) => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    });
  };

  filterCategories();

  const filterCertifications = () => {
    mediaArray.forEach((media) => {
      if (!certifications.includes(media.certification)) {
        certifications.push(media.certification);
      }
    });
  };

  filterCertifications();
  const [media, setMedia] = useState(mediaArray);

  const handleTypeSelect = (option) => {
    if (option === "All") {
      setMedia(mediaArray);
      setSelectedType(option);
      setSelectedCategory("");
      return setSelectedCerti("");
    } else {
      const filtered = mediaArray.filter((media) => media.type === option);
      setMedia(filtered);
      setSelectedType(option);
      setSelectedCategory("");
      setSelectedCerti("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://truad-dashboard-backend.onrender.com/media",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setMediaArray(data.data);
      setMedia(data.data);
    };

    fetchData();
  }, [openDialog]);

  useEffect(() => { }, [mediaArray]);

  const handleCategorySelect = (option) => {
    setSelectedCategory(option);
    if (selectedType.trim() !== "" && selectedCerti.trim() !== "") {
      const filtered = mediaArray.filter(
        (media) =>
          media.type === selectedType &&
          media.certification === selectedCerti &&
          media.category.includes(option)
      );
      setMedia(filtered);
    } else if (selectedType === "All") {
      const filtered = mediaArray.filter((media) =>
        media.category.includes(option)
      );
      setMedia(filtered);
    } else if (selectedType.trim() !== "") {
      const filtered = mediaArray.filter(
        (media) =>
          media.type === selectedType && media.category.includes(option)
      );
      setMedia(filtered);
    } else if (selectedCerti.trim() !== "") {
      const filtered = mediaArray.filter(
        (media) =>
          media.certification === selectedCerti &&
          media.category.includes(option)
      );
      setMedia(filtered);
    } else {
      const filtered = mediaArray.filter((media) =>
        media.category.includes(option)
      );
      setMedia(filtered);
      selectedMovies();
    }
  };

  const handleCertificationSelect = (option) => {
    setSelectedCerti(option);
    if (selectedType.trim() !== "" && selectedCategory.trim() !== "") {
      const filtered = mediaArray.filter(
        (media) =>
          media.type === selectedType &&
          media.category.includes(selectedCategory) &&
          media.certification === option
      );
      setMedia(filtered);
    } else if (selectedType === "All") {
      const filtered = mediaArray.filter(
        (media) => media.certification === option
      );
      setMedia(filtered);
    } else if (selectedType.trim() !== "") {
      const filtered = mediaArray.filter(
        (media) => media.type === selectedType && media.certification === option
      );
      setMedia(filtered);
    } else if (selectedCategory.trim() !== "") {
      const filtered = mediaArray.filter(
        (media) =>
          media.category.includes(selectedCategory) &&
          media.certification === option
      );
      setMedia(filtered);
    } else {
      const filtered = mediaArray.filter(
        (media) => media.certification === option
      );
      setMedia(filtered);
    }
  };

  const handleSearch = () => {
    const filtered = mediaArray.filter(
      (media) =>
        media.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        media.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    searchMovies();
    setMedia(filtered);
    setSearchTerm("");
  };

  const handleAddChange = (e) => {
    setAdd((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleAdd = async () => {
    console.log(add);
    const newMedia = {
      Name: add.mediaName,
      Type: add.mediaType || "TV",
      poster: poster,
      Duration: `${add.hours} hrs ${add.minutes} minutes`,
      "Available Ad Clips": 8,
      Starring: [add.star1, add.star2],
      "Release Date": add.releaseDate,
      "No of Episodes": add.noOfEpisodes || "NA",
      Season: add.seasons || "NA",
      Category: [add.category1, add.category2, add.category3],
      Certification: add.certification,
    };
    console.log(newMedia);
    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("clipsDur", clipDuration);
    formData.append("data", JSON.stringify(newMedia));

    const response = await fetch("http://localhost:4000/add-media", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setMediaArray((prev) => [data.saveData, ...prev]);

    setMedia((prev) => [data.saveData, ...prev]);

    handleClose();
  };

  const handleURLChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const url = e.target.result;
      setPoster(url);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        width: "80%",
        flexGrow: "1",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          background: "rgb(25, 25, 25)",
          width: "100%",
          height: "60px",
          alignItems: "center",
          justifyContent: "start",
          paddingLeft: "20px",
          position: "fixed",
          zIndex: "2",
        }}
      >
        <SegmentIcon
          sx={{
            width: "2em",
            height: "2em",
            color: "white",
            marginLeft: 0,
          }}
        />
      </div>
      <CssBaseline />
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          background: "#343a40e0",
        }}
      >
        <CustomButton />
        <div className={styles.search_container } id="searchContainer">

          <Stack direction={"row"} spacing={3} sx={{ paddingX: "2em" }}>
            <FormControl
              variant="standard"
              sx={{ m: 1,  color: "white" }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{ color: "white" }}
              >
                Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Type"
                sx={{ color: "white", ".MuiSvgIcon-root": { color: "white" } }}
                value={selectedType}
                onChange={(e) => {
                  handleTypeSelect(e.target.value);
                }}
              >
                {typeOptions?.map((option) => {
                  return (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{ m: 1, color: "white" }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{ color: "white" }}
              >
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Category"
                sx={{ color: "white", ".MuiSvgIcon-root": { color: "white" } }}
                value={selectedCategory}
                onChange={(e) => {
                  handleCategorySelect(e.target.value);
                }}
              >
                {categories.map((option) => {
                  return (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{ m: 1,  color: "white" }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{ color: "white" }}
              >
                Certification
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Certification"
                sx={{ color: "white", ".MuiSvgIcon-root": { color: "white" } }}
                value={selectedCerti}
                onChange={(e) => handleCertificationSelect(e.target.value)}
              >
                {certifications.map((option) => {
                  return (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Stack>
          <Box sx={{ paddingInline: 3 ,display:"flex" }}>
            <input style={{width:"75%"}}
              type="text"
              placeholder="Please enter the resource name, actors, production company and placement client"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <button style={{ width:"25%" ,fontSize:'12px' ,textAlign:"center"}} onClick={handleSearch}>Search</button>
          </Box>
        </div>
        <div className={styles.dashboard}>
          <div className={styles.resource}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <SegmentIcon width="2em" height="2em" color="white" />
              <h4 style={{ margin: "0px" }}>Resource</h4>
            </div>
            <button onClick={openDialogBox} style={{ borderRadius: "8px" }}>
              Add
            </button>
          </div>
          
          <div style={{ padding: "5px" }}>
            {/* Card */}
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={2}
                columns={{ xs: 4, sm: 8, md: 12 }}

                direction="row"
                justifyContent="center"
                alignItems="center"


              >
                {/* <<<<<<< HEAD
                {movies.map(({ imdbID }) => {
======= */}
                {/* {Array.from(Array(20)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))} */}
                {movies ? (
                  movies.map(({ imdbID }) => {
                    // >>>>>>> a84f766f5c8bd8bd01c515329839669f745bca10
                    return <MCard1 key={imdbID} id={imdbID} />;
                  })
                ) : (
                  <DataNotFound />
                )}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        open={openDialog}
        PaperComponent={StyledPaper}
      >
        <DialogTitle>Add a Media</DialogTitle>

        <form style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="mediaName">Media Name:</label>
            <input
              onChange={(e) => handleAddChange(e)}
              id="mediaName"
              type="text"
              placeholder="Enter Media Name"
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="mediaType">Media Type:</label>
            <select
              id="mediaType"
              onChange={(e) => handleAddChange(e)}
              value={add.mediaType || ""}
              style={{ width: "100%" }}
            >
              <option value="" disabled>
                Select a Type
              </option>
              <option value="TV">TV</option>
              <option value="Movie">Movie</option>
            </select>
          </div>
          <label>
            Import Video File:
            <input
              // ref={fileInputRef}
              type="file"
              name="video"
              id="videoFile"
              accept="video/*" // Restrict file input to video files
              onChange={handleFileChange}
              required
              style={{ display: "block", marginBottom: "1rem" }}
            />
          </label>
          <label>
            Clip Duration:
            <input
              required
              type="text"
              value={clipDuration}
              onChange={(e) => setClipDuration(e.target.value)}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
          </label>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="posterUrl">Poster URL:</label>
            <input
              onChange={(e) => handleURLChange(e)}
              id="posterUrl"
              type="file"
              placeholder="Enter Poster URL"
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="duration">Duration:</label>
            <div style={{ display: "flex", marginBottom: "0.5rem" }}>
              <input
                onChange={(e) => handleAddChange(e)}
                id="hours"
                type="number"
                placeholder="Hours"
                style={{ width: "50%", marginRight: "0.5rem" }}
                disabled={add.mediaType === "TV"}
              />
              <input
                onChange={(e) => handleAddChange(e)}
                id="minutes"
                type="number"
                placeholder="Minutes"
                style={{ width: "50%" }}
                disabled={add.mediaType === "TV"}
              />
            </div>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="stars">Stars:</label>
            <input
              onChange={(e) => handleAddChange(e)}
              id="star1"
              type="text"
              placeholder="Enter Star 1"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <input
              onChange={(e) => handleAddChange(e)}
              id="star2"
              type="text"
              placeholder="Enter Star 2"
              style={{ width: "100%" }}
            />
          </div>
          <label htmlFor="releaseDate">Release Date:</label>
          <input
            onChange={(e) => handleAddChange(e)}
            id="releaseDate"
            type="date"
            placeholder="Release Date"
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          <label htmlFor="noOfEpisodes">No. of Episodes</label>
          <input
            onChange={(e) => handleAddChange(e)}
            id="noOfEpisodes"
            type="number"
            placeholder="No. of Episodes"
            style={{ width: "100%", marginBottom: "1rem" }}
            disabled={add.mediaType === "Movie"}
          />
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="seasons">Seasons:</label>
            <input
              onChange={(e) => handleAddChange(e)}
              id="seasons"
              type="number"
              placeholder="Enter Seasons"
              style={{ width: "100%" }}
              disabled={add.mediaType === "Movie"}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="certification">Genre:</label>
            <select
              id="category1"
              value={add.category1 || ""}
              onChange={(e) => handleAddChange(e)}
              style={{ width: "100%" }}
            >
              <option value="" disabled>
                Select a Genre
              </option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
            </select>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="certification">Category:</label>
            <select
              id="category2"
              value={add.category2 || ""}
              onChange={(e) => handleAddChange(e)}
              style={{ width: "100%" }}
            >
              <option value="" disabled>
                Select a Category
              </option>
              <option value="Romance">Romance</option>
              <option value="Adventure">Adventure</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Thriller">Thriller</option>
            </select>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="certification">Sub Category:</label>
            <select
              id="category3"
              value={add.category3 || ""}
              onChange={(e) => handleAddChange(e)}
              style={{ width: "100%" }}
            >
              <option value="" disabled>
                Select a Sub Category
              </option>
              <option value="Romantic Comedy">Romantic Comedy</option>
              <option value="Action Comedy">Action Comedy</option>
              <option value="Sci-Fi Thriller">Sci-Fi Thriller</option>
              <option value="Horror Comedy">Horror Comedy</option>
            </select>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="certification">Certification:</label>
            <select
              id="certification"
              value={add.certification || ""}
              onChange={(e) => handleAddChange(e)}
              style={{ width: "100%" }}
            >
              <option value="" disabled>
                Select a Certification
              </option>
              <option value="SA">SA</option>
              <option value="PG-13">PG-13</option>
              <option value="S+">S+</option>
              <option value="TV-MA">TV-MA</option>
              <option value="TV-14">TV-14</option>
              <option value="R">R</option>
            </select>
          </div>
        </form>

        <button onClick={handleClose} color="primary">
          Cancel
        </button>
        <button
          onClick={handleAdd}
          color="primary"
          style={{ marginTop: "50px" }}
        >
          Save
        </button>
      </Dialog>
    </div>
  );
};

export default Dashhboard;

const StyledPaper = (props) => (
  <Paper {...props} style={{ padding: "20px", minWidth: "1000px" }} />
);
