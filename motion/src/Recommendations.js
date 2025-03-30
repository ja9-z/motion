import React, { useState, useEffect, useRef } from "react";

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
        <div>
            <h1>Movie Recommendations</h1>
            {data.movies.length === 0 ? (
                <p>Still loading...</p>
            ) : (
                data.movies.map((mov, i) => <p key={i}>{mov}</p>)
            )}

            <h1>Song Recommendations</h1>
            {data2.songs.length === 0 ? (
                <p>Still loading...</p>
            ) : (
                data2.songs.map((s, i) => <p key={i}>{s}</p>)
            )}
        </div>
    );
}

export default Recommendations;
