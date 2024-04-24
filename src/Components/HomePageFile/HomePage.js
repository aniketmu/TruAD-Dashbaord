import React from "react";
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

  console.log(cookies.userdata)
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
        <div className="homepage_clip_info">
          <div className="activity-title">
            <p>Recent Work</p>
          </div>
          <div className="df">
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
                navigate("/dashboard/material/", { swap:  true});
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