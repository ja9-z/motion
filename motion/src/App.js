
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import Recommendations from "./Recommendations"
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
/*
import { useState } from "react";
import axios from "axios";

function App() {
  const [movie, setMovie] = useState("");
  const [recommendations, setRecommendations] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setRecommendations(null);
    try {
      const response = await axios.post("http://127.0.0.1:5000/" + movie);
      setRecommendations(response.data);
    } catch (err) {
      setError("No recommendations found. Try another movie.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Movie Recommender</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a movie name"
          value={movie}
          onChange={handleChange}
        />
        <button type="submit">Get Recommendations</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {recommendations && (
        <div>
          <h2>Recommended Movies:</h2>
          <ul>
            {recommendations.movies.map((m, index) => (
              <li key={index}>{m}</li>
            ))}
          </ul>
          <h2>Recommended Songs:</h2>
          <ul>
            {recommendations.songs.map((s, index) => (
              <li key={index}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;*/
import React, { useState, useEffect } from "react";


function AnimatedRoutes() {
  const location = useLocation();  // ✅ Tracks location changes

  return (
      
          <Routes location={location} key={location.pathname}>  
              <Route path="/recs" element={<Recommendations />} />
              
              
          </Routes>
  );
}

function App() {
    const [movie, setMovie] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:5000/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ movie }),
        });
    };

    

    return (
        <form onSubmit={handleSubmit}>
            
            <input 
                type="text" 
                value={movie} 
                onChange={(e) => setMovie(e.target.value)} 
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default App;


