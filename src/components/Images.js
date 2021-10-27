import React from "react";
import LoneImage from "./LoneImage";

const Images = ({ images }) => {
  return images.map((image) => <LoneImage key={image.id} image={image} />);
};

export default Images;
