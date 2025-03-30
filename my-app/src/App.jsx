import React from "react";
import image16 from "./assets/image 16.png";
import star4 from "./assets/Star 4.svg";
import star5 from "./assets/Star 5.svg";
import star6 from "./assets/Star 6.svg";
import star7 from "./assets/Star 7.svg";
import star8 from "./assets/Star 8.svg";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="overlap">
        <div className="text-wrapper">MOTION</div>

        <img className="star" alt="Star" src={star5} />

        <img className="img" alt="Star" src={star8} />

        <img className="star-2" alt="Star" src={star7} />
      </div>

      <div className="overlap-group">
        <p className="movies">
          <span className="span">mo</span>

          <span className="text-wrapper-2">vies + recommenda</span>

          <span className="text-wrapper-3">tion</span>
        </p>

        <div className="enter-a-movie-and-wrapper">
          <p className="enter-a-movie-and">enter a movie and get song/movie recs!</p>
        </div>

        <div className="image-wrapper">
          <img className="image" alt="Image" src={image16} />
        </div>

        <img className="star-3" alt="Star" src={star4} />

        <img className="star-4" alt="Star" src={star6} />
      </div>
    </div>
  );
};

export default Frame;