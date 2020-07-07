import React, {  useContext } from 'react';
import { MoviesContext } from '../contexts/moviesContext';
import MovieTemplate from './MovieTemplate';

const Movies = () => {
    const { error, errorVal, movies } = useContext(MoviesContext);
    const movieList = !error && movies.length ?
        movies.map(movie => {
            const { Title: title, Poster: art, Type: type, Year: year, imdbID: imdb } = movie;
            return (
                <MovieTemplate movie={ { title, art, type, year, imdb } } key={imdb}></MovieTemplate>
            )
        })
        :
        (
            <div>
                <span>{errorVal ? errorVal : ''}</span>
            </div>
        )
        
    return !error || !errorVal.length ? (
        <div className="movies">
            { movieList }
        </div>
    )
    :
    (
        <div className="fetch-error">
            { movieList }
        </div>
    )
}

export default Movies;