import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import menu from "../Assets/menu.png";
import CustomButton from "./CustomButton";
import MCard from "./Card";


const Dashhboard = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCerti, setSelectedCerti] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const mediaArray = [
    {
      Name: "Stranger Things",
      Type: "TV Show",
      poster:
        "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      Duration: "Varies",
      "Available Ad Clips": 8,
      Starring: ["Millie Bobby Brown", "Finn Wolfhard"],
      "Release Date": 2016,
      "No of Episodes": 25,
      Season: 3,
      Category: ["Drama", "Fantasy", "Horror"],
      Certification: "PG-13",
    },
    {
      Name: "Tanu Weds Manu",
      Type: "Movie",
      poster:
        "https://image.tmdb.org/t/p/original/cY1lEQu6sgofrKAVUigtXpOvZQZ.jpg",
      Duration: "3hr 21min",
      "Available Ad Clips": 5,
      Starring: ["Kangana Ranaut", "R Madhavan"],
      "Release Date": 2016,
      "No of Episodes": "NA",
      Season: "NA",
      Category: ["Comedy", "Drama", "Romance"],
      Certification: "S+",
    },
    {
      Name: "Inception",
      Type: "Movie",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      Duration: "2hr 28min",
      "Available Ad Clips": 3,
      Starring: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      "Release Date": 2010,
      "No of Episodes": "NA",
      Season: "NA",
      Category: ["Action", "Adventure", "Sci-Fi"],
      Certification: "PG-13",
    },
    {
      Name: "The Crown",
      Type: "TV Show",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1DDE0Z2Y805rqfkEjPbZsMLyPwa.jpg",
      Duration: "Varies",
      "Available Ad Clips": 10,
      Starring: ["Claire Foy", "Matt Smith"],
      "Release Date": 2016,
      "No of Episodes": 40,
      Season: 4,
      Category: ["Biography", "Drama", "History"],
      Certification: "TV-MA",
    },
    {
      Name: "The Dark Knight",
      Type: "Movie",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      Duration: "2hr 32min",
      "Available Ad Clips": 4,
      Starring: ["Christian Bale", "Heath Ledger"],
      "Release Date": 2008,
      "No of Episodes": "NA",
      Season: "NA",
      Category: ["Action", "Crime", "Drama"],
      Certification: "PG-13",
    },
    {
      Name: "Friends",
      Type: "TV Show",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
      Duration: "Varies",
      "Available Ad Clips": 6,
      Starring: ["Jennifer Aniston", "Courteney Cox"],
      "Release Date": 1994,
      "No of Episodes": 236,
      Season: 10,
      Category: ["Comedy", "Romance"],
      Certification: "TV-14",
    },
    {
      Name: "The Shawshank Redemption",
      Type: "Movie",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      Duration: "2hr 22min",
      "Available Ad Clips": 3,
      Starring: ["Tim Robbins", "Morgan Freeman"],
      "Release Date": 1994,
      "No of Episodes": "NA",
      Season: "NA",
      Category: ["Drama"],
      Certification: "R",
    },
    {
      Name: "Breaking Bad",
      Type: "TV Show",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
      Duration: "Varies",
      "Available Ad Clips": 9,
      Starring: ["Bryan Cranston", "Aaron Paul"],
      "Release Date": 2008,
      "No of Episodes": 62,
      Season: 5,
      Category: ["Crime", "Drama", "Thriller"],
      Certification: "TV-MA",
    },
    {
      Name: "The Matrix",
      Type: "Movie",
      poster:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      Duration: "2hr 16min",
      "Available Ad Clips": 4,
      Starring: ["Keanu Reeves", "Carrie-Anne Moss"],
      "Release Date": 1999,
      "No of Episodes": "NA",
      Season: "NA",
      Category: ["Action", "Sci-Fi"],
      Certification: "R",
    },
  ];

  const typeOptions = ["All", "TV Show", "Movie"];

  const categories = [];
  const certifications = [];

  const filterCategories = () => {
    mediaArray.forEach((media) => {
      media.Category.forEach((category) => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    });
  };

  filterCategories();

  const filterCertifications = () => {
    mediaArray.forEach((media) => {
      if (!certifications.includes(media.Certification)) {
        certifications.push(media.Certification);
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
      const filtered = mediaArray.filter((media) => media.Type === option);
      setMedia(filtered);
      setSelectedType(option);
      setSelectedCategory("");
      setSelectedCerti("");
    }
  };

  const handleCategorySelect = (option) => {
    setSelectedCategory(option);
    if (selectedType.trim() !== "" && selectedCerti.trim() !== "") {
      const filtered = mediaArray.filter(
        (media) =>
          media.Type === selectedType &&
          media.Certification === selectedCerti &&
          media.Category.includes(option)
      );
      setMedia(filtered);
    } else if (selectedType === "All") {
      const filtered = mediaArray.filter((media) =>
        media.Category.includes(option)
      );
      setMedia(filtered);
    } else if (selectedType.trim() !== "") {
      const filtered = mediaArray.filter(
        (media) =>
          media.Type === selectedType && media.Category.includes(option)
      );
      setMedia(filtered);
    } else if (selectedCerti.trim() !== "") {
      const filtered = mediaArray.filter(
        (media) =>
          media.Certification === selectedCerti &&
          media.Category.includes(option)
      );
      setMedia(filtered);
    } else {
      const filtered = mediaArray.filter((media) =>
        media.Category.includes(option)
      );
      setMedia(filtered);
    }
  };

  const handleCertificationSelect = (option) => {
    setSelectedCerti(option);
    if (selectedType.trim() !== "" && selectedCategory.trim() !== "") {
      const filtered = mediaArray.filter(
        (media) =>
          media.Type === selectedType &&
          media.Category.includes(selectedCategory) &&
          media.Certification === option
      );
      setMedia(filtered);
    } else if (selectedType === "All") {
      const filtered = mediaArray.filter(
        (media) => media.Certification === option
      );
      setMedia(filtered);
    } else if (selectedType.trim() !== "") {
      const filtered = mediaArray.filter(
        (media) => media.Type === selectedType && media.Certification === option
      );
      setMedia(filtered);
    } else if (selectedCategory.trim() !== "") {
      const filtered = mediaArray.filter(
        (media) =>
          media.Category.includes(selectedCategory) &&
          media.Certification === option
      );
      setMedia(filtered);
    } else {
      const filtered = mediaArray.filter(
        (media) => media.Certification === option
      );
      setMedia(filtered);
    }
  };

  const handleSearch = () => {
    const filtered = mediaArray.filter(
      (media) =>
        media.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        media.Type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMedia(filtered);
    setSearchTerm("");
  };

  return (
    <div style={{ width: "80%", height: "100vh" }}>
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
          <div className={styles.resource}>
            <img
              src={menu}
              style={{ height: "20px", width: "20px" }}
              alt="menu-btn"
            />
            <h4 style={{ margin: "0px" }}>Resource</h4>
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
                  Name={media.Name}
                  Category={media.Category}
                  Duration={media.Duration}
                  NOE={media[`No of Episodes`]}
                  Seasons={media.Season}
                  RD={media["Release Date"]}
                  Poster={media.poster}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashhboard;
