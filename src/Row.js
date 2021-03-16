import React, { useState, useEffect } from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // code that runs based on variable
    useEffect(() => {
        //if [] run once
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            {/** title */}
            <h2>{title}</h2>

            <div className="row_posters">
                {/** container -> posters */}
                {movies.map(movie => (
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                ))}

            </div>

        </div>
    )
}

export default Row