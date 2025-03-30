import React, { useState, useEffect } from "react";
import "./Recommendations.css"

function Recommendations() {
    

    const [data, setData] = useState({ movies: [] });

    const [data2, setData2] = useState({songs: []});
    

    useEffect(()=>{
        fetch("/getMovieRecs").then(
            res =>res.json()
        ).then(
            data =>{
                setData(data)
                console.log(data)
            }
        )
    }, [])

    
    useEffect(()=>{
        fetch("/getSongRecs").then(
            res =>res.json()
        ).then(
            data2 =>{
                setData2(data2)
                console.log(data2)
            }
        )
    }, [])
    

    return(
        <div className = "Recommendations">
            <div className = "recDiv1">
                <h1>movie list</h1>
                {(typeof data.movies === "undefined") ? (
                    <p>still loading...</p>
                ): (
                    data.movies.map((mov,i) => (
                        <p key = {i}>{mov}</p>
                    ))
                )
                }
            </div>
            <div>
                <h1>song list</h1>
                {(typeof data2.songs === "undefined") ? (
                    <p>still loading...</p>
                ): (
                    data2.songs.map((s,i) => (
                        <p key = {i}>{s}</p>
                    ))
                )
                }
            </div>
        </div>
    )
        

}

export default Recommendations;