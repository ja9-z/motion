
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from "react";



function Home() {
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

export default Home;


