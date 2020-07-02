import React, { useState, useContext } from 'react';
import {MoviesContext} from '../contexts/moviesContext';


const SearchForm = () => {
    const { getMovie } = useContext(MoviesContext);
    const [keyword, setKeyword] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        getMovie(keyword);
        setKeyword('');
    }
    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <input placeholder="Title keyword" value={ keyword } onChange={ e => setKeyword(e.target.value) }>
                </input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;