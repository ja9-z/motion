import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image16 from "./assets/image 16.png";
import star4 from "./assets/Star 4.svg";
import star5 from "./assets/Star 5.svg";
import star6 from "./assets/Star 6.svg";
import star7 from "./assets/Star 7.svg";
import star8 from "./assets/Star 8.svg";
import "./style.css";




function Home() {
   const [movie, setMovie] = useState("");
   const navigate = useNavigate();
   const handleSubmit = async (e) => {
       e.preventDefault();
       await fetch("http://127.0.0.1:5000/", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ movie }),
       });
   };


   /*return (
       <form onSubmit={handleSubmit}>
          
           <input
               type="text"
               value={movie}
               onChange={(e) => setMovie(e.target.value)}
           />
           <button type="submit" onClick={() => navigate("/recs")}>Submit</button>
       </form>
   );*/


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
      <form onSubmit={handleSubmit}> 
           <input
               type="text"
               value={movie}
               onChange={(e) => setMovie(e.target.value)}
               class = "enter-a-movie-and"
               placeholder="Enter a movie"
           />
           {/*<button type="submit" onClick={() => navigate("/recs")}>Submit</button>*/}
       </form>
      </div>




      <div
   className="image-wrapper"
   onClick={(e) => {
       e.preventDefault();
       handleSubmit(e);
       navigate("/recs");
   }}
>
        <img className="image" alt="Image" src={image16} />
      </div>




      <img className="star-3" alt="Star" src={star4} />




      <img className="star-4" alt="Star" src={star6} />
    </div>
  </div>
   );
}


export default Home;


