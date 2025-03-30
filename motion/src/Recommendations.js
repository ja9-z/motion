import React, { useState, useEffect } from "react";





function Recommendations() {
    

    const [mdata, setData] = useState({ movies: [] });

    const [sdata, setData2] = useState({songs: []});

    useEffect(()=>{
        fetch("/getMovieRecs").then(
            res =>res.json()
        ).then(
            data =>{
                setData(mdata)
                console.log(mdata)
            }
        )
    }, [])

    useEffect(()=>{
        fetch("/getSongRecs").then(
            res =>res.json()
        ).then(
            data =>{
                setData(sdata)
                console.log(sdata)
            }
        )
    }, [])

    return(
        <div>
        <h1>movie list</h1>
        {(typeof mdata.movies === "undefined") ? (
            <p>still loading...</p>
        ): (
            mdata.movies.map((mov,i) => (
                <p key = {i}>{mov}</p>
            ))
        )
        }
        <div>

        <h1>song list</h1>
        {(typeof sdata.songs === "undefined") ? (
            <p>still loading...</p>
        ): (
            sdata.songs.map((son,i) => (
                <p key = {i}>{son}</p>
            ))
        )
        }
        </div>
        
        </div>
    )
        

}

export default Recommendations;