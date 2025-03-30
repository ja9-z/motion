
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, BrowserRouter } from 'react-router-dom'

import Recommendations from "./Recommendations"
import Home from "./Home"
import React, { useState, useEffect } from "react";

/*
function AnimatedRoutes() {
  const location = useLocation();  // ✅ Tracks location changes

  return (
    <BrowserRouter> 
        <Routes location={location} key={location.pathname}>  
              <Route path = "/home" element = {<Home />} />
              <Route path="/recs" element={<Recommendations />} />             
          </Routes>
    </BrowserRouter>

  );
}*/

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          <Route path = "/home" element = {<Home />} />
          <Route path = "/recs" element = {<Recommendations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//export default App;


