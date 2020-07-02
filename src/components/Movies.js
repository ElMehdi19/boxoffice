import React, {  useContext } from 'react';
import { MoviesContext } from '../contexts/moviesContext';
import MovieTemplate from './MovieTemplate';

const Movies = () => {
    const { error, movies } = useContext(MoviesContext);
    const movieList = !error && movies.length ?
        movies.map(movie => {
            const { Title: title, Poster: art, Type: type, Year: year, imdbID: imdb } = movie;
            return (
                <MovieTemplate movie={ { title, art, type, year, imdb } } key={imdb}></MovieTemplate>
            )
        })
        :
        (
            <div className="fetch-error">
                <span>
                { 
                    error ? 'SOME ERROR OCCURED.' : 'NO MATCHING MOVIES FOUND.' 
                }
                </span>
            </div>
        )
    return (
        <div className="movies">
            { movieList.length ? movieList : '' }
        </div>
    )
}

export default Movies;