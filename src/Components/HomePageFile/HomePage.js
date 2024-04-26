import { useEffect, useState } from "react";
import "./HomePage.css";
import EmailIcon from "@mui/icons-material/Email";
import greenDot from "../../Assets/greenDot.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RaiseTicket from './../MaterialManagmentFolder/Raise Ticket/RaiseTicket';
import RaiseDailog from './../MaterialManagmentFolder/Raise Ticket/RaiseDailog';
import { Avatar } from "@mui/material";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, setCookie] = useCookies(["userdata"]);
  const [clips, setClips] = useState([]);

  console.log(cookies.userdata);

  const [processedClips, setProcessedClips] = useState([])
  const [ongoing, setOngoing] = useState([])

  console.log(processedClips);

  const settings = {
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://truad-dashboard-backend.onrender.com/allItems",
          {
            method: "GET",
          }
        );

        const data = await response.json();
        // const data2 = data.items.map((item) => item.location.split("?AWS")[0]);
        const data2 = data.items.map((elem) => ({
          ...elem,
          location: elem.location.split("?AWS")[0],
        }));
        setClips(data2);
        const processed = data2.filter((elem) => elem.blendFile)
        const ongoingClips = data2.filter((elem) => elem.blend && !elem.blendFile)
        setOngoing(ongoingClips)
        setProcessedClips(processed)
        console.log("clip", clips);
        console.log("processed", processedClips)
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const handleClipClick = async (vid) => {
    // try {
    //   const response = await fetch("http://localhost:4000/blend-clip", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       id: vid._id,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   if (response.status == 500) {
    //     console.log("Internal Server Error");
    //     return;
    //   }

    //   if (response.status == 200) {
    //     console.log("Success");
    //     return;
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    navigate("/dashboard/video", {state: {location:vid}})
  };
  return (
    <div className="homepage_container">
      {/* <div className="homepage_navbar">
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
      </div> */}
      <div className="px-3 py-2">
      <Avatar sx={{marginRight:0, marginLeft:"auto", p:3}}>{cookies.userdata.username.charAt(0).toUpperCase()}</Avatar>
      </div>
      <div className="homepage_activities">
        <div className="homepage_clip_info">
          <div className="activity-title rounded-top-3">
            <p>Available Content Clips</p>
          </div>
          <div className="rounded-bottom-3 py-1 bg-body-secondary">
{/* <<<<<<< HEAD */}
          <Carousel showDots={true} responsive={responsive}>
              {
              clips.map((item, index) => (
// =======
//             <Slider {...settings}>
//               {clips.map((item, index) => (
//                 <div key={index} className="text-center">
//                   <video
//                     style={{ height: "100px", width: "auto" }}
//                     src={item.location}
//                     controls
//                     onClick={() => handleClipClick(item)}
//                   ></video>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>

//         <div className="homepage_clip_info">
//           <div className="activity-title rounded-top-3">
//             <p>Processed Clips</p>
//           </div>
//           <div className="rounded-bottom-3 py-1 bg-body-secondary">
//             <Slider {...settings}>
//               {processedClips.map((item, index) => (
//                 <div key={index} className="text-center">
//                   <video
//                     style={{ height: "100px", width: "auto" }}
//                     src={item.location}
//                     controls
//                     onClick={() => handleClipClick(item)}
//                   ></video>
//                   {/* <button
//                     type="button"
//                     className="btn btn-secondary"
//                     onClick={() => handleClipClick(item)}
//                   >
//                     Send to Editor
//                   </button> */}
//                 </div>
//               ))}
//             </Slider>
//             {/* <Carousel showDots={true} responsive={responsive}>
//               {clips.map((item, index) => (
// >>>>>>> 05bef3ae70e85f7c0111cfed0b47ab797dd163db
                <div key={index} className="text-center">
                  <video
                    style={{ height: "100px", width: "auto" }}
                    src={item.location}
                    controls
                    onClick={() => handleClipClick(item)}
                  ></video>
                  
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="homepage_clip_info">
          <div className="activity-title rounded-top-3">
            <p>Processed Clips</p>
          </div>
          <div className="rounded-bottom-3 py-1 bg-body-secondary">
{/* <<<<<<< HEAD */}
            <Carousel showDots={true} responsive={responsive}>
              {
              clips.map((item, index) => (
// =======
//             <Slider {...settings}>
//               {ongoing.map((item, index) => (
// >>>>>>> 05bef3ae70e85f7c0111cfed0b47ab797dd163db
                <div key={index} className="text-center">
                  <video
                    style={{ height: "100px", width: "auto" }}
                    src={item.location}
                    controls
                    onClick={() => handleClipClick(item)}
                  ></video>
                  
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="homepage_clip_info">
          <div className="activity-title rounded-top-3">
            <p>AI Detecttion Ongoing</p>
          </div>
          <div className="rounded-bottom-3 py-1 bg-body-secondary">
          <Carousel showDots={true} responsive={responsive}>
              {
              clips.map((item, index) => (
                <div key={index} className="text-center">
                  <video
                    style={{ height: "100px", width: "auto" }}
                    src={item.location}
                    controls
                    onClick={() => handleClipClick(item)}
                  ></video>
                  
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="homepage_clip_info">
          <div className="activity-title rounded-top-3">
            <p>Tickets</p>
          </div>
          <div className="activity_info rounded-bottom-3 py-1 bg-body-secondary">
            <p>Tickets Raised: 4</p>
            <div className="line"></div>
            <p>Pending Tickets: 1</p>
            <div className="line"></div>
            {/* <p>Solved Tickets: 3</p> */}
          </div>
        </div>
        <div className="homepage_clip_info_invoice">
          <div className="activity-title">
            <p>Payment</p>
          </div>
          <div className="activity_info">
            <p>Total Invoices: 121</p>
            <div className="line"></div>
            <p>Payment Pending: 32</p>
            <div className="line"></div>
            <p>Cleared Invoices: 89</p>
          </div>
        </div>
        {/* 
        <div className="homepage_clip_info_next">
          <div className="activity-title">
            <p>What's next</p>
          </div>
          <div className="activity_info">
            <p>We are soon going to be partnering up with Sony Liv</p>
          </div>
        </div> */}
        <div className="homepage_clip_info_next">
          <div className="activity-title">
            <p>Links</p>
          </div>
          <div className="activity_info_button">
            {/* <button
              onClick={() => {
                navigate("/dashboard/material/", { swap: true });
              }}
            >
              Upload new Materials
            </button>
            <button onClick={() => navigate("/dashboard/raiseticket")}>
              AI Editor
            </button>
            <button onClick={() => navigate("/dashboard/raiseticket")}>
              Analytics
            </button> */}
            <div
              class="btn-group-vertical py-2"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" class="btn btn-secondary p-2">
                Upload new Materials
              </button>
              <button type="button" class="btn btn-secondary p-2" >
                AI Editor
              </button>
              <button type="button" class="btn btn-secondary p-2" >
                Analytics
              </button>
            </div>
            <div
              class="btn-group-vertical"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" class="btn btn-secondary p-2">
                RaiseTicket
              </button>
              <button type="button" class="btn btn-secondary p-2">
                RaiseDailog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
