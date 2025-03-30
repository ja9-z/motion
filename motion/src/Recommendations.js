import React, { useState, useEffect, useRef } from "react";
import "./Recommendations.css"
import image1 from "./assets/filmmmm.png";
import starPink from "./assets/pinkStarr.png";
import cd from "./assets/discc.png";
import starBlue from "./assets/blueStarr.png";
import { useNavigate } from "react-router-dom";

function Recommendations() {
    const [data, setData] = useState({ movies: [] });
    const [data2, setData2] = useState({ songs: [] });
    const hasFetched = useRef(false)

    const navigate = useNavigate();

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const fetchRecommendations = async () => {
            try {
                const movieRes = await fetch("http://127.0.0.1:5000/getMovieRecs");
                const movieData = await movieRes.json();
                setData({ movies: movieData.movies || [] });

                const songRes = await fetch("http://127.0.0.1:5000/getSongRecs");
                const songData = await songRes.json();
                setData2({ songs: songData.songs || [] });
                if (!movieData.movies || movieData.movies.length === 0 || !songData.songs || songData.songs.length === 0) {
                    navigate("/error");
                }
            } catch (error) {
                console.error("Error fetching recommendations:", error);
                navigate("/error");
            }
        };

        fetchRecommendations();
    },[navigate]); // Depend on `fetched` to prevent duplicate calls

    return (
        <div className = "Recommendations">
            <div>
                <div className = "recDiv2">
                <div style = {{zIndex: 1}}>
                    <div style={{paddingLeft: "50vh", paddingBottom: "10vh"}}>
                        <div>
                            <h1 style = {{fontSize: 60, color: "#0E233E" }}>movies</h1>
                            {data.movies.length === 0 ? (
                            <p>Still loading...</p>
                            ) : (
                            data.movies.map((mov, i) => <p key={i} className = "individDiv1" style = {{fontSize: 18}}>{mov}</p>)
                            )}
                        </div>

                    </div>
                    <div className = "imageDiv">
                        <img src={image1}>
                        </img>
                    </div>
             </div>
                    <div style={{position: "absolute", marginTop: 200, zIndex: 0, marginLeft: -400}}>
                <img src = {starPink}></img>
            </div>
                </div>
                    
            </div>
            
        
            <div></div>
            <div className = "recDiv2">
                    <div className = "imageDiv2" style = {{zIndex:1}}>
                        <img src={cd}>
                        </img>
                    </div>
                <div style = {{display: "flex", flexDirection: "column", zIndex:1}}>
                    <h1 style = {{fontSize: 60, color: "#4E4B9A" }}>songs</h1>
                    {data2.songs.length === 0 ? (
                        <p>Still loading...</p>
                    ) : (
                        data2.songs.map((s, i) => <p key={i} className = "individDiv1" style = {{fontSize: 18}}>{s}</p>)
                    )}
                </div>
                <div style ={{position: "absolute", zIndex: 0, marginRight: -400}}>
                <img src = {starBlue}></img></div>
            </div>
        </div>
    );
}

export default Recommendations;
