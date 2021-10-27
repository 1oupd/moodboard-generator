import React from "react";

const LoneImage = ({ image }) => {
  return (
    <div className="photo">
      <img src={image.urls.small} alt="unsplash moodboard image" />
    </div>
  );
};

export default LoneImage;
