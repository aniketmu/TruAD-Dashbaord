import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VideoClip = () => {
  const location = useLocation();
  // console.log(location.state.video);
  const [data, setData] = useState([
    //   {
    //       file: "https://imgs.search.brave.com/5YfDZ_BrNmW8ShDojzoMD8HgsVQ7SLM2tRWHWNbqQEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFMW44VCtJbkwu/anBn",
    //       name: "Lenova i5",
    //       group: "Lenova",
    //       size: "16:4",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/5YfDZ_BrNmW8ShDojzoMD8HgsVQ7SLM2tRWHWNbqQEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFMW44VCtJbkwu/anBn",
    //       name: "Lenova i3",
    //       group: "Lenova",
    //       size: "16:9",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/5YfDZ_BrNmW8ShDojzoMD8HgsVQ7SLM2tRWHWNbqQEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFMW44VCtJbkwu/anBn",
    //       name: "Lenova i7",
    //       group: "Lenova",
    //       size: "16:0",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/rF4rlcGROPpsgZSDqF7idtQ-eyvLK4E8rdpdt_bxpbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTcwMzQ4Mi9waG90/by9hcHBsZS1tYWNi/b29rLXByby0xNS1y/ZXRpbmEtb24tdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWswVFA0OHFk/bzVwMGlCMzMwNEh1/S1cwVWFkOEQteWlF/R2tuczhYOXJUelU9",
    //       name: "MacBook air i5",
    //       group: "apple",
    //       size: "16:0",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/rF4rlcGROPpsgZSDqF7idtQ-eyvLK4E8rdpdt_bxpbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTcwMzQ4Mi9waG90/by9hcHBsZS1tYWNi/b29rLXByby0xNS1y/ZXRpbmEtb24tdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWswVFA0OHFk/bzVwMGlCMzMwNEh1/S1cwVWFkOEQteWlF/R2tuczhYOXJUelU9",
    //       name: "MacBook air M1",
    //       group: "apple",
    //       size: "12:6",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/rF4rlcGROPpsgZSDqF7idtQ-eyvLK4E8rdpdt_bxpbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTcwMzQ4Mi9waG90/by9hcHBsZS1tYWNi/b29rLXByby0xNS1y/ZXRpbmEtb24tdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWswVFA0OHFk/bzVwMGlCMzMwNEh1/S1cwVWFkOEQteWlF/R2tuczhYOXJUelU9",
    //       name: "MacBook air M2",
    //       group: "apple",
    //       size: "16:9",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
    //       name: "Samsung S1 ",
    //       group: "samsung",
    //       size: "10:0",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
    //       name: "Samsung S2",
    //       group: "samsung",
    //       size: "10:2",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
    //       name: "Samsung S3",
    //       group: "samsung",
    //       size: "4:9",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
    //       name: "Samsung S4",
    //       group: "samsung",
    //       size: "12:0",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/qtKZlY5eedORHBMZWxXzHgZe7gd8AX8Wy7t9DbxIajs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8xOS9zYW1z/dW5nLWdhbGF4eS1h/NTAvZ2FsLy0xMDI0/dzIvZ3NtYXJlbmFf/MDA2LmpwZw",
    //       name: "Samsung S5",
    //       group: "samsung",
    //       size: "16:9",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/Q-HWKQSSUFIvuXTOHYW3Jh8phPsxk9x30wcp_Y-WYRA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njg3MDY0MDcxNDIt/Y2FmZTBjOTFlNWE2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGJt/OXJhV0Y4Wlc1OE1I/eDhNSHg4ZkRBPQ",
    //       name: "Nokia A1",
    //       group: "nokia",
    //       size: "15:9",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/Q-HWKQSSUFIvuXTOHYW3Jh8phPsxk9x30wcp_Y-WYRA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njg3MDY0MDcxNDIt/Y2FmZTBjOTFlNWE2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGJt/OXJhV0Y4Wlc1OE1I/eDhNSHg4ZkRBPQ",
    //       name: "Nokia A2",
    //       group: "nokia",
    //       size: "12:9",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/Q-HWKQSSUFIvuXTOHYW3Jh8phPsxk9x30wcp_Y-WYRA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njg3MDY0MDcxNDIt/Y2FmZTBjOTFlNWE2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGJt/OXJhV0Y4Wlc1OE1I/eDhNSHg4ZkRBPQ",
    //       name: "Nokia A1",
    //       group: "nokia",
    //       size: "16:0",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/NsrfMBC2jrDnyLwTe4InCbSa6hM5IgvCR-Lon3Nm13g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2NjZnRlY2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL1hpYW9taS1N/aS1Ob3RlYm9vay1Q/cm8tMTUtNzQweDQ3/Ny5qcGc",
    //       name: "Mi i5",
    //       group: "mi",
    //       size: "16:9",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/NsrfMBC2jrDnyLwTe4InCbSa6hM5IgvCR-Lon3Nm13g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2NjZnRlY2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL1hpYW9taS1N/aS1Ob3RlYm9vay1Q/cm8tMTUtNzQweDQ3/Ny5qcGc",
    //       name: "Mi i3",
    //       group: "mi",
    //       size: "14.5",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/NsrfMBC2jrDnyLwTe4InCbSa6hM5IgvCR-Lon3Nm13g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2NjZnRlY2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL1hpYW9taS1N/aS1Ob3RlYm9vay1Q/cm8tMTUtNzQweDQ3/Ny5qcGc",
    //       name: "mi ultra",
    //       group: "mi",
    //       size: "18:0",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/BjP66chO1Y-yfdkupsFJRN71YfNg9pm_GlQLdwdgWS0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3NX/VWd0aU05bXA4UU5B/YWRpOGFtd1otNDgw/LTgwLmpwZw",
    //       name: "Reame 7",
    //       group: "realme",
    //       size: "10:0",
    //   },
    //   {
    //       file: "https://imgs.search.brave.com/BjP66chO1Y-yfdkupsFJRN71YfNg9pm_GlQLdwdgWS0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3NX/VWd0aU05bXA4UU5B/YWRpOGFtd1otNDgw/LTgwLmpwZw",
    //       name: "Realme 5",
    //       group: "realme",
    //       size: "12:0",
    //   },
  ]);
  const [image, setimage] = useState(location.state.img);
  const [imageSrc, setImageSrc] = useState(null)
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
          setImageSrc(url);
        } catch (error) {
            console.error("Error fetching image:", error);
          }
  }

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

  return (
      <div style={{ width: "100%", backgroundColor: "rgb(220, 220, 220)" }}>

          {/* // head container */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "60px", padding: '12px 20px 10px 20px' }} >
              <div style={{ backgroundColor: "white", width: "50%", height: "50px", margin: "0 10px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "7px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                  <h4>Oprate</h4>
              </div>
              <div style={{ backgroundColor: "white", width: "50%", height: "50px", margin: "0 10px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "7px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
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
                      backgroundColor: "white",
                      borderRadius: '7px',
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  }}
              >
                  <h6 style={{ textAlign: "center", paddingTop:"15px", paddingBottom:"5px" }}>Resource</h6>
                  {/* {location?.state.location &&<video
                      style={{ width: "95%", margin: "0 auto", height: "40%", borderRadius: "7px", boxShadow: "rgba(0, 0, 1, 0.74) 0px 3px 8px" }}

                      src={location.state.video}
                      title="Youtube Player"
                      frameborder="0"
                      allowFullScreen
                  />} */}
                  {/* {location.state?.location && <video style={{ width: "95%", margin: "0 auto", height: "40%", borderRadius: "7px", boxShadow: "rgba(0, 0, 1, 0.74) 0px 3px 8px" }} src={location.state.location.location || null} controls></video>} */}
                  {!imageSrc && location.state?.location ? <video style={{ width: "95%", margin: "0 auto", height: "40%", borderRadius: "7px", boxShadow: "rgba(0, 0, 1, 0.74) 0px 3px 8px" }} src={location.state.location.location || null} controls></video> : imageSrc && <img src={imageSrc} style={{ width: "95%", margin: "0 auto", height: "40%", borderRadius: "7px", boxShadow: "rgba(0, 0, 1, 0.74) 0px 3px 8px" }}></img>}
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "7px" ,height:"40px", position:"relative"  }}>
                      <h6
                          style={{
                              textAlign: "center",
                              position:"absolute",
                              bottom:"0px"

                              // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
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
                          src={image?.file}
                          alt=""
                          style={{
                              objectFit: "contain",
                              width: "100%",
                              height: "100%",
                              borderRadius: "7px",
                              boxShadow: "rgba(0, 0, 0.5, 0.74) 0px 3px 8px",
                              padding: '5px 5px'
                          }}
                      />
                  </div>

                  <button style={{ margin: "20px 10px", borderRadius: "7px", backgroundColor: 'red' }} onClick={handleClipChange}>
                      Blend
                  </button>
              </div>

              {/* rigthSide */}
              <div style={{ width: "50%", backgroundColor: "white", margin: "10px", border: '1px solid white', borderRadius: '7px' }}>
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
                          height: '95%', // Ensure this is effectively limiting the height
                          padding: '10px',
                          overflow: 'hidden', // Added to manage overflow
                      }}
                  >
                      <div
                          style={{
                              padding: "10px",
                              display: "grid",
                              gridTemplateColumns: "repeat(2, 1fr)",
                              gap: "20px",
                              overflowY: 'auto', // This allows scrolling within the grid if it overflows vertically
                              maxHeight: 'calc(100% - 20px)', // Adjusted to account for padding and prevent overflow
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

export default VideoClip