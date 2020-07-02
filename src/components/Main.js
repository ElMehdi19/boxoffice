import React, { Fragment } from 'react';
import Navbar from './Navbar';
import SearchFrom from './SearchForm';
import Movies from './Movies';
import MoviesContextProvider from '../contexts/moviesContext';

const Main = () => {
    return (
        <Fragment>
            <Navbar />
            <MoviesContextProvider>
                <SearchFrom />
                <Movies />
            </MoviesContextProvider>
        </Fragment>
    )
}

export default Main;