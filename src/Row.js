import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // Um trecho de código executado com base em uma condicao especifica.
    useEffect(() => {
        // se [], execute assim que a linha carregar e nao execute novamente.
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {/** several row_posters */}

                {movies.map(movie => (
                    <img
                        className="row_poster"
                        src={`${base_url}${movie.poster_path}`} alt={movie.name}
                    />
                ))}
            </div>
            {/** Container -> posters */}
        </div>
    )
}

export default Row;
