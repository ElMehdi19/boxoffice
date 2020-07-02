import React, { createContext, useState } from 'react';

export const MoviesContext = createContext();

const MoviesContextProvider = props => {
    const [error, setError] = useState(false);
    const [movies, setMovies] = useState([]);
    const getMovie = async movie_keyword => {
        const endpoint = `http://www.omdbapi.com/?s=${movie_keyword}&apikey=99274763`;
        try {
            const request = await fetch(endpoint);
            const data = await request.json();
            setError(false);
            setMovies(data.Search);
        }
        catch(error){
            setError(true);
        }
    } 
    return (
        <MoviesContext.Provider value={{ getMovie, error, movies } }>
            {props.children}
        </MoviesContext.Provider>
    )
}

export default MoviesContextProvider;