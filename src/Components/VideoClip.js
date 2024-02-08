import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VideoClip = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location?.state) {
      navigate("/dashboard");
    }
  }, [location]);

  return (
    <div>
      <button onClick={(e) => navigate("/dashboard")}>Back</button>
      {location.state?.location && <video src={location.state.location || null} controls></video>}
    </div>
  );
};

export default VideoClip;
