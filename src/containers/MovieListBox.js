import React, { useState } from "react";
import MovieList from "../components/MovieList";
import MovieWatchListForm from "../components/MovieWatchListForm";

const MovieListBox = () => {

    const[movies, setMovies] = useState([
        {
            title: 'Spider-Man',
            director: 'Sam Raimi',
            genre: 'Action',
            watchTime: 121
        }
    ])

    const addMovie = (ContentData) => {
        const copyOfMovies = [...movies, ContentData];
        setMovies(copyOfMovies);
    }

    return(
        <>
            <MovieWatchListForm addMovie={addMovie}/>
            <MovieList moviesData={movies}/>
        </>
    )
}

export default MovieListBox;