import Recommendations from "./Recommendations";
import { useNavigate } from "react-router-dom";
import star10 from "./assets/Star 10.png";

import "./Error.css";

function ErrorPage() {
    return (
      <div className="container">
        <div className="logoContainer">
            <img className="star" alt="Star" src={star10} />
            <p className="text">NO <br /> MOTION</p>
        </div>
        <div className="errorMessage">
          <h1>sorry, movie not found!</h1>
          <div className="emoji" role="img" aria-label="Crying face">
            😢
          </div>
        </div>
      </div>
    );
}

export default ErrorPage;
