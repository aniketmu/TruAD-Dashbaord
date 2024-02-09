import React from 'react'
import { useLocation } from "react-router-dom";
const data=[1,3,4,5,6,6,7,8]
function ActionPage() {
    const location = useLocation();
    return (
        <div style={{ width: "100%", backgroundColor: "red" }}>
            <nav
                style={{ width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px 20px" }}
            >
                {" "}
                {/* Added gap */}
                <div style={{ width: "calc(50% - 10px)" }}>
                    {" "}
                    {/* Adjust width to account for gap */}
                    <button
                        style={{
                            width: "100%",
                            borderTopLeftRadius: "20px" /* Border radius on top-left */,
                            borderBottomLeftRadius: "20px" /* Border radius on bottom-left */,
                            backgroundColor: "gray",
                        }}
                    >
                        Operate
                    </button>
                </div>
                <div style={{ width: "calc(50% - 10px)" }}>
                    {" "}
                    {/* Adjust width to account for gap */}
                    <button
                        style={{
                            width: "100%",
                            borderTopRightRadius: "20px" /* Border radius on top-right */,
                            borderBottomRightRadius:
                                "20px" /* Border radius on bottom-right */,
                            backgroundColor: "grey",
                        }}
                    >
                        Raise Ticket
                    </button>
                </div>
            </nav>

            <div style={{ display: "flex", backgroundColor: "green", margin: "10px 20px", height: "90vh" }}>
                <div style={{ width: "50%", backgroundColor: "aqua", margin: "10px", display: "flex", flexDirection: "column" }}>
                    <h3 style={{ textAlign: "center" }}>Resource</h3>
                    <video src={location?.state?.location || ""} style={{ width: "95%", backgroundColor: "yellow", margin: "0 auto", height: "35%", borderRadius: "7px" }} controls></video>

                    <h3 style={{ textAlign: "center", marginTop: "10px", borderRadius: "7px" }}>Material</h3>
                    <div style={{ width: "95%", backgroundColor: "gold", margin: "0 auto", height: "35%" }}>
                        <img src="https://imgs.search.brave.com/4krF387zcl9-cCMiBQtYjMI3uXauO2lghwG-RAkr8Ic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pcS5v/cGVuZ2VudXMub3Jn/L2NvbnRlbnQvaW1h/Z2VzLzIwMjEvMDgv/Ym9yZGVyLnBuZw" alt="" style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "7px" }} />
                    </div>

                    <button style={{ margin: "20px 10px", borderRadius: "7px" }}>Blend</button>



                </div>


                {/* rigthSide */}
                <div style={{ width: "50%", backgroundColor: "blue", margin: "10px" }}>
                    <h3 style={{ textAlign: "center", marginTop: "10px", borderRadius: "7px" }}>Material</h3>
                    <div style={{display:"flex" ,flexWrap:"wrap", width:"100%", overflow:'auto'}}>
                    <div
            style={{
              padding: "20px",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              justifyItems: "center",
              alignItems: "center",
              overflow: "hidden",
           
              
            }}
          >
            {data.map(({ file }, index) => {
              return (
                <img
                  key={index}
                  src="https://imgs.search.brave.com/4krF387zcl9-cCMiBQtYjMI3uXauO2lghwG-RAkr8Ic/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pcS5v/cGVuZ2VudXMub3Jn/L2NvbnRlbnQvaW1h/Z2VzLzIwMjEvMDgv/Ym9yZGVyLnBuZw"
                //   onClick={({ target: { src } }) => setimage(src)}
                  style={{
                    maxHeight: "300px",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              );
            })}
          </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ActionPage