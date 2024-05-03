import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function ActionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [image, setimage] = useState(location?.state?.img || '');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://truad-dashboard-backend.onrender.com/api/getMaterial");
      const datar = await response.json();

      const materials = datar.materials;

      materials.forEach((element) => {
        element["file"] = element.url;
        delete element["url"];
      });

      console.log(materials);
      setData(materials);

      console.log("updated", data);
    };

    fetchData();
  }, []);

  const handleClipChange = async() => {
    console.log(location.state.location)
    console.log("image", image)
    // try {
    //     const response = await fetch("https://truad-dashboard-backend.onrender.com/blend-clip", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             id: location.state.location._id
    //         }),
    //         headers: {
    //             "Content-Type" : "application/json"
    //         }
    //     })

    //     if(response.status == 500){
    //         console.log("Internal Server Error")
    //         return
    //     }

    //     if(response.status == 200){
    //         console.log("Success")
    //         return
    //     }
    // } catch (error) {
    //     console.log(error)
    // }
    try {
        const response = await fetch ("http://127.0.0.1:5000/apply_material", {
            method: 'POST',
            body: JSON.stringify({
                material_name: image.name,
                video: location.state.location
            }),
            headers: {
                'Content-Type' : "application/json"
            }
        })
        if (!response.ok) {
            throw new Error("Failed to fetch image");
          }
  
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setimage(url);
        } catch (error) {
            console.error("Error fetching image:", error);
          }
  }
  return (
    <div style={{ width: "100%", backgroundColor: "#6c757d" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "60px",
          padding: "12px 20px 10px 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#212529",
            color: "#fffffff5",
            width: "50%",
            height: "50px",
            margin: "0 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "7px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            cursor: "pointer",
          }}
        >
          <h4>Oprate</h4>
        </div>

        <div
          onClick={() => {
            navigate("/dashboard/raiseticket");
          }}
          style={{
            backgroundColor: "#212529",
            color: "#fffffff5",
            width: "50%",
            height: "50px",
            margin: "0 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "7px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            cursor: "pointer",
          }}
        >
          <h4>Raise Ticket</h4>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          margin: "10px 20px",
          height: "90vh",
        }}
      >
        <div
          style={{
            width: "50%",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#343a40",
            color: "#fffffff5",
            borderRadius: "7px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <h6
            style={{
              textAlign: "center",
              paddingTop: "15px",
              paddingBottom: "5px",
            }}
          >
            Resource
          </h6>
          {location?.state?.location && <video
            style={{
              width: "95%",
              margin: "0 auto",
              height: "40%",
              borderRadius: "7px",
              boxShadow: "rgba(0, 0, 1, 0.74) 0px 3px 8px",
              backgroundColor: "white",
            }}
            title="Video Player"
            controls
          >
            <source src={location.state.location.location} type="video/mp4" />
            Your browser does not support the video tag.
          </video>}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "7px",
              height: "40px",
              position: "relative",
            }}
          >
            <h6
              style={{
                textAlign: "center",
                position: "absolute",
                bottom: "0px",
              }}
            >
              Material
            </h6>
          </div>

          <div
            style={{
              width: "95%",
              margin: "0 auto",
              height: "40%",
            }}
          >
            {image && <img
              src={image.file}
              alt=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "7px",
                boxShadow: "rgba(0, 0, 0.5, 0.74) 0px 3px 8px",
              }}
            />}
          </div>
          <Button
            component="div"
            sx={{
              borderRadius: 2,
              margin: 2,
              marginBottom: 1.3,
              padding: 1,
              color: "white",
              bgcolor: "rgba(0, 0, 0, 0.38);",
              "&:hover": {
                bgcolor: "red",
              },
            }}
            onClick={handleClipChange}
          >
            Blend
          </Button>
        </div>

        {/* rigthSide */}
        <div
          style={{
            width: "50%",
            backgroundColor: "#343a40",
            color: "#fffffff5",
            margin: "10px",
            borderRadius: "7px",
          }}
        >
          <h6
            style={{
              textAlign: "center",
              marginTop: "10px",
              borderRadius: "7px",
            }}
          >
            All Material
          </h6>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              height: "95%", // Ensure this is effectively limiting the height
              padding: "10px",
              overflow: "hidden", // Added to manage overflow
            }}
          >
            <div
              style={{
                padding: "10px",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
                overflowY: "auto", // This allows scrolling within the grid if it overflows vertically
                maxHeight: "calc(100% - 20px)", // Adjusted to account for padding and prevent overflow
              }}
            >
              {data?.map(( elem , index) => {
                              return (
                                  <div
                                      key={index} // Moved the key here for proper list rendering
                                      style={{
                                          width: "100%", // Ensure this controls the size as intended
                                          height: 'auto', // Adjusted for responsive height based on the content
                                      }}
                                  >
                                      <img
                                          src={elem?.file}
                                          onClick={() => setimage(elem)}
                                          style={{
                                              objectFit: "contain",
                                              width: "100%",
                                              height: "auto", // Adjusted to maintain aspect ratio
                                              borderRadius: "7px",
                                              maxHeight: '200px', // Optional: limit image height if desired
                                              boxShadow: "rgba(0, 0, 1, 0.74) 0px 3px 8px"
                                          }}
                                      />
                                  </div>
                              );
                          })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionPage;
