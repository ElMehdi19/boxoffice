import React from 'react';

const MovieTemplate = ({ movie }) => {
    movie.imdburl = `https://www.imdb.com/title/${movie.imdb}`;
    return (
        <div className="movie">
            <h3 className="movie-title"><span className="span-handle">Title:</span> { movie.title }</h3>
            <h3 className="movie-rating"><span className="span-handle">Type:</span> {movie.type}</h3>
            <img className="movie-art" src={movie.art} alt="name"></img>
            <h3 className="movie-director">
                <span className="span-handle-imdb">IMDB ID: </span> 
                <a href={movie.imdburl} target="_blank" rel="noopener noreferrer">{movie.imdb}</a>
            </h3>
            <h3 className="movie-date">({ movie.year })</h3>
        </div>
    )
}

export default MovieTemplate;