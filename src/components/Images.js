import React from "react";
import LoneImage from "./LoneImage";
import "./image.css";

const Images = ({ images }) => {
  return images.map((image) => <LoneImage key={image.id} image={image} />);
};

export default Images;
