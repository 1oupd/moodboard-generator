import React from "react";
import "./image.css";

const LoneImage = ({ image }) => {
  return (
    <div className="photos">
      <img src={image.urls.small} alt="random unsplash moodboard" />
    </div>
  );
};

export default LoneImage;
