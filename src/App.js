import "./App.css";
import Header from "./components/Header.js";
import axios from "axios";
import { useState } from "react";
import Images from "./components/Images";

const App = () => {
  const [images, setImages] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=T54oD4JHOaEPwBM1O9OD2vtpr2HRH0OyFpFT2X4yijI"
    );
    const data = await response.data;
    setImages(data);
  };

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="photos">
        {images.length > 0 && <Images images={images} />}
      </div>
      <div>
        <button onClick={fetchAPI}>Click me</button>
      </div>
    </div>
  );
};

export default App;
