import { useEffect, useState } from "react";
import "./HomePage.css";
import EmailIcon from "@mui/icons-material/Email";
import greenDot from "../../Assets/greenDot.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, setCookie] = useCookies(["userdata"]);
  const [clips, setClips] = useState([]);

  console.log(cookies.userdata);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:4000/allItems", {
          method: "GET",
        });

        const data = await response.json();
        // const data2 = data.items.map((item) => item.location.split("?AWS")[0]);
        const data2 = data.items.map((elem) => ({
          ...elem,
          location: elem.location.split("?AWS")[0],
        }));
        setClips(data2);
        console.log(clips);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="homepage_container">
      <div className="homepage_navbar">
        <div className="homepage_navbar_info">
          <h2>Hi {cookies.userdata.username}!</h2>
          <h6>{cookies.userdata.email}</h6>
        </div>
        <div className="homepage_navbar_email">
          <EmailIcon />
          <div className="done-icon">
            <img src={greenDot} />
          </div>
        </div>
        <div className="homepage_navbar_notif">
          <NotificationsIcon />
          <div className="done-icon">
            <img src={greenDot} />
          </div>
        </div>
      </div>
      <div className="homepage_activities">
      <div className="homepage_clip_info">
          <div className="activity-title">
            <p>Available Content Clips</p>
          </div>
          <div className="df">
            {clips.length > 0 && (
              <div style={{ display: "flex" }}>
                {clips.map((item) => (
                  <video
                    style={{ height: "150px", width: "200px" }}
                    src={item.location}
                    controls
                    // title="YouTube video player"
                    // frameborder="0"
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    // referrerpolicy="strict-origin-when-cross-origin"
                    // allowfullscreen
                  ></video>
                ))}
              </div>
            )}
            {/* <div>
              <iframe
                src="https://www.youtube.com/embed/Wbs6pPJgBnA?si=tqdU6aGztepmEQcb"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <h5>video name</h5>
            </div>
            <div>
              <iframe
                src="https://www.youtube.com/embed/Wbs6pPJgBnA?si=tqdU6aGztepmEQcb"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <h5>video name</h5>
            </div>
            <div>
              <iframe
                src="https://www.youtube.com/embed/Wbs6pPJgBnA?si=tqdU6aGztepmEQcb"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <h5>video name</h5>
            </div> */}
          </div>
        </div>
        <div className="homepage_clip_info">
          <div className="activity-title">
            <p>Clips Advertisement</p>
          </div>
          <div className="activity_info">
            <p>Clips Advertised: 2</p>
            <div className="line"></div>
            <p>Pending Clips Advertisment: 2</p>
            <div className="line"></div>
            <p>Processed Clips: 0</p>
          </div>
        </div>
        <div className="homepage_clip_info">
          <div className="activity-title">
            <p>Tickets</p>
          </div>
          <div className="activity_info">
            <p>Tickets Raised: 4</p>
            <div className="line"></div>
            <p>Pending Tickets: 1</p>
            <div className="line"></div>
            <p>Solved Tickets: 3</p>
          </div>
        </div>
        <div className="homepage_clip_info_invoice">
          <div className="activity-title">
            <p>Invoices</p>
          </div>
          <div className="activity_info">
            <p>Total Invoices: 121</p>
            <div className="line"></div>
            <p>Payment Pending: 32</p>
            <div className="line"></div>
            <p>Cleared Invoices: 89</p>
          </div>
        </div>
        
        <div className="homepage_clip_info_next">
          <div className="activity-title">
            <p>What's next</p>
          </div>
          <div className="activity_info">
            <p>We are soon going to be partnering up with Sony Liv</p>
          </div>
        </div>
        <div className="homepage_clip_info_next">
          <div className="activity-title">
            <p>Links</p>
          </div>
          <div className="activity_info_button">
            <button
              onClick={() => {
                navigate("/dashboard/material/", { swap: true });
              }}
            >
              Upload new Materials
            </button>
            <button onClick={() => navigate("/dashboard/raiseticket")}>
              Have an issue? Raise a ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
