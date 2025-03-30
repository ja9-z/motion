import React, { useState, useEffect, useRef } from "react";
import "./Recommendations.css"
import image1 from "./assets/reel.png";

function Recommendations() {
    const [data, setData] = useState({ movies: [] });
    const [data2, setData2] = useState({ songs: [] });
    const hasFetched = useRef(false)

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
            } catch (error) {
                console.error("Error fetching recommendations:", error);
            }
        };

        fetchRecommendations();
    },[hasFetched]); // Depend on `fetched` to prevent duplicate calls

    return (
        <div className = "Recommendations">
            <div className = "recDiv1">
                <div className = "horizontalDiv">
                    <div>
                        <img src={image1}>
                        </img>
                    </div>
                    <h1>movies</h1>
                    {data.movies.length === 0 ? (
                        <p>Still loading...</p>
                    ) : (
                        data.movies.map((mov, i) => <p key={i}>{mov}</p>)
                    )}
                </div>
            </div>
            <div className = "recDiv2">
                <h1>songs</h1>
                {data2.songs.length === 0 ? (
                    <p>Still loading...</p>
                ) : (
                    data2.songs.map((s, i) => <p key={i}>{s}</p>)
                )}
            </div>
        </div>
    );
}

export default Recommendations;
