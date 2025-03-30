
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'

import Recommendations from "./Recommendations"
import Home from "./Home"
import React, { useState, useEffect, useRef } from "react";

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
      <Router>
        <Routes>
          <Route index element = {<Home />} />
          <Route path = "/" element = {<Home />} />
          <Route path = "/recs" element = {<Recommendations />} />
        </Routes>
      </Router>
    </div>
  );
}

//export default App;


