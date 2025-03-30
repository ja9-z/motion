import React, { useState, useEffect, useRef } from "react";
import "./Recommendations.css"
<<<<<<< Updated upstream
import image1 from "./assets/reel.png";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> Stashed changes

function Recommendations() {
    const [data, setData] = useState({ movies: [] });
    const [data2, setData2] = useState({ songs: [] });
    const hasFetched = useRef(false)

<<<<<<< Updated upstream
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
=======
    const [data2, setData2] = useState({songs: []});
    
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("/getMovieRecs")
            .then(res => res.json())
            .then(data => {
                if (!data.movies || data.movies.length === 0) {
                    navigate("/error"); // Redirect to Error.js if empty
                } else {
                    setData(data);
                    console.log(data);
                }
            })
            .catch(error => {
                console.error("Error fetching movie recommendations:", error);
                navigate("/error"); // Redirect on fetch error
            });
    }, [navigate]);
>>>>>>> Stashed changes

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
