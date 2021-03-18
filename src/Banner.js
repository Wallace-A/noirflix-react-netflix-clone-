import React, { useState, useEffect } from 'react';
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            {/* fetch netflix originals to display one banner*/}
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
            }}
        >   

            <div className="banner_contents">
                {/* Title */}
                <h1 className="banner_title"> {movie?.title || movie?.name || movie?.original_name}</h1>
               
                {/* Description */}
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
                 {/* Div > 2 Buttons (Play, My List) */}
                 <div className="banner_buttons">
                    <button className="banner_button play">
                        <div className="banner-button-icon">
                            <FontAwesomeIcon icon={faPlay} />
                        </div> 
                        <div style={{width: "1rem"}}></div>
                        <div className="banner-button-text">
                            Play
                        </div>
                    </button>
                    <button className="banner_button list">
                        <div className="banner-button-icon">
                            <FontAwesomeIcon icon={faPlus} />
                        </div> 
                        <div style={{width: "1rem"}}></div>
                        <div className="button-text">
                            My List
                        </div>
                    </button>
                </div>
            </div>
            {/* div for fade effect */}
            <div className="banner--fadeBottom"></div>

        </header>
    )
}

export default Banner
