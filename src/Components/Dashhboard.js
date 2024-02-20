import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import menu from "../Assets/menu.png";
import CustomButton from "./CustomButton";
import MCard from "./Card";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/Dialog";
import DialogActions from "@mui/material/Dialog";
import Button from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";

const Dashhboard = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCerti, setSelectedCerti] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [openDialog, handleDisplay] = useState(false);
  const [add, setAdd] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [clipDuration, setClipDuration] = useState(10);
  const [poster, setPoster] = useState("");

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const [mediaArray, setMediaArray] = useState([]);

  // const [mediaArray, setMediaArray] = useState([
  //   {
  //     _id: 1,
  //     name: "Stranger Things",
  //     type: "TV Show",
  //     poster:
  //       "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  //     duration: "Varies",
  //     availableAdClips: 8,
  //     starring: ["Millie Bobby Brown", "Finn Wolfhard"],
  //     releaseDate: 2016,
  //     noOfEpisodes: 25,
  //     season: 3,
  //     category: ["Drama", "Fantasy", "Horror"],
  //     certification: "PG-13",
  //   },
  //   {
  //     _id: 2,
  //     name: "Tanu Weds Manu",
  //     type: "Movie",
  //     poster:
  //       "https://image.tmdb.org/t/p/original/cY1lEQu6sgofrKAVUigtXpOvZQZ.jpg",
  //     duration: "3hr 21min",
  //     availableAdClips: 5,
  //     starring: ["Kangana Ranaut", "R Madhavan"],
  //     releaseDate: 2016,
  //     noOfEpisodes: "NA",
  //     season: "NA",
  //     category: ["Comedy", "Drama", "Romance"],
  //     certification: "S+",
  //   },
  //   {
  //     _id: 3,
  //     name: "Inception",
  //     type: "Movie",
  //     poster:
  //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  //     duration: "2hr 28min",
  //     availableAdClips: 3,
  //     starring: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
  //     releaseDate: 2010,
  //     noOfEpisodes: "NA",
  //     season: "NA",
  //     category: ["Action", "Adventure", "Sci-Fi"],
  //     certification: "PG-13",
  //   },
  //   {
  //     _id: 4,
  //     name: "The Crown",
  //     type: "TV Show",
  //     poster:
  //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1DDE0Z2Y805rqfkEjPbZsMLyPwa.jpg",
  //     duration: "Varies",
  //     availableAdClips: 10,
  //     starring: ["Claire Foy", "Matt Smith"],
  //     releaseDate: 2016,
  //     noOfEpisodes: 40,
  //     season: 4,
  //     category: ["Biography", "Drama", "History"],
  //     certification: "TV-MA",
  //   },
  //   {
  //     _id: 5,
  //     name: "The Dark Knight",
  //     type: "Movie",
  //     poster:
  //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  //     duration: "2hr 32min",
  //     availableAdClips: 4,
  //     starring: ["Christian Bale", "Heath Ledger"],
  //     releaseDate: 2008,
  //     noOfEpisodes: "NA",
  //     season: "NA",
  //     category: ["Action", "Crime", "Drama"],
  //     certification: "PG-13",
  //   },
  //   {
  //     _id: 6,
  //     name: "Friends",
  //     type: "TV Show",
  //     poster:
  //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
  //     duration: "Varies",
  //     availableAdClips: 6,
  //     starring: ["Jennifer Aniston", "Courteney Cox"],
  //     releaseDate: 1994,
  //     noOfEpisodes: 236,
  //     season: 10,
  //     category: ["Comedy", "Romance"],
  //     certification: "TV-14",
  //   },
  //   {
  //     _id: 7,
  //     name: "The Shawshank Redemption",
  //     type: "Movie",
  //     poster:
  //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  //     duration: "2hr 22min",
  //     availableAdClips: 3,
  //     starring: ["Tim Robbins", "Morgan Freeman"],
  //     releaseDate: 1994,
  //     noOfEpisodes: "NA",
  //     season: "NA",
  //     category: ["Drama"],
  //     certification: "R",
  //   },
  //   {
  //     _id: 8,
  //     name: "Breaking Bad",
  //     type: "TV Show",
  //     poster:
  //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
  //     duration: "Varies",
  //     availableAdClips: 9,
  //     starring: ["Bryan Cranston", "Aaron Paul"],
  //     releaseDate: 2008,
  //     noOfEpisodes: 62,
  //     season: 5,
  //     category: ["Crime", "Drama", "Thriller"],
  //     certification: "TV-MA",
  //   },
  //   {
  //     _id: 9,
  //     name: "The Matrix",
  //     type: "Movie",
  //     poster:
  //       "https://image.tmdb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  //     duration: "2hr 16min",
  //     availableAdClips: 4,
  //     starring: ["Keanu Reeves", "Carrie-Anne Moss"],
  //     releaseDate: 1999,
  //     noOfEpisodes: "NA",
  //     season: "NA",
  //     category: ["Action", "Sci-Fi"],
  //     certification: "R",
  //   },
  // ]);

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
      console.log(data.data);
      setMediaArray(data.data);
      setMedia(data.data);
    };

    fetchData();
  }, [openDialog]);

  useEffect(() => {}, [mediaArray]);

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
      // headers: {
      //   ...formHeaders,
      // },
      body: formData,
    });

    const data = await response.json();

    console.log(data);

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
      >
        <img
          src={menu}
          style={{ height: "40px", width: "40px" }}
          alt="menu-btn"
        />
      </div>

      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          background: "#DCDCDC",
        }}
      >
        <CustomButton />
        <div className={styles.search_container}>
          <input
            type="text"
            placeholder="Please enter the resource name, actors, production company and placement client"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className={styles.dashboard}>
          <div className={styles.resource} style={{}}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
                src={menu}
                style={{ height: "20px", width: "20px" }}
                alt="menu-btn"
              />
              <h4 style={{ margin: "0px" }}>Resource</h4>
            </div>
            <button onClick={openDialogBox} style={{ borderRadius: "8px" }}>
              Add
            </button>
          </div>
          <div className={styles.dropdowns}>
            <div className={styles.dropdown}>
              <label>Type</label>
              <select
                value={selectedType}
                onChange={(e) => handleTypeSelect(e.target.value)}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {typeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.dropdown}>
              <label>Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategorySelect(e.target.value)}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {categories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.dropdown}>
              <label>Certification</label>
              <select
                value={selectedCerti}
                onChange={(e) => handleCertificationSelect(e.target.value)}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {certifications.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            {media.map((media) => {
              return (
                <MCard
                  id={media._id || media.id}
                  Name={media.name}
                  Category={media.category}
                  Duration={media.duration}
                  NOE={media.noOfEpisodes}
                  Seasons={media.season}
                  RD={media.releaseDate}
                  Poster={media.poster}
                  key={media.id}
                  video={media.mediaLocation}
                  AdClips={media.availableAdClips}
                />
              );
            })}
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
          {/* <label>
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
          </label> */}
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
