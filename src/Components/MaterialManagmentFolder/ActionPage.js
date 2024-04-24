import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function ActionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [image, setimage] = useState(location.state.img);
  useEffect(() => {
    async function fetchurl() {
      const data = await fetch(
        "https://truad-dashboard-backend.onrender.com/api/getMaterial"
      );
      const data1 = await data.json();
      setData(data1.materials);
    }
    fetchurl();
  });
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
          <video
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
            <source src={location.state.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

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
            <img
              src={image}
              alt=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "7px",
                boxShadow: "rgba(0, 0, 0.5, 0.74) 0px 3px 8px",
              }}
            />
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
              {data.map((el, index) => {
                return (
                  <div
                    key={index} // Moved the key here for proper list rendering
                    style={{
                      width: "100%", // Ensure this controls the size as intended
                      height: "auto", // Adjusted for responsive height based on the content
                    }}
                  >
                    <img
                      src={el.url}
                      onClick={({ target: { src } }) => setimage(src)}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "auto", // Adjusted to maintain aspect ratio
                        borderRadius: "7px",
                        maxHeight: "200px", // Optional: limit image height if desired
                        boxShadow: "rgba(0, 0, 1, 0.74) 0px 3px 8px",
                      }}
                      alt=""
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
