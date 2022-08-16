import React, { useState } from "react";
import MovieList from "../components/MovieList";
import MovieWatchListForm from "../components/MovieWatchListForm";

const MovieListBox = () => {

    const[movies, setMovies] = useState([
        {
            title: 'Spider-Man',
            director: 'Sam Raimi',
            genre: 'Action',
            watchTime: 121,
            isWatched: false
        }
    ])

    const addMovie = (ContentData) => {
        const copyOfMovies = [...movies, ContentData];
        setMovies(copyOfMovies);
    }

    const watchedMovie = (index) => {
        const copyOfMovies = [...movies];
        const copyThisMovie = movies[index];
        copyThisMovie.isWatched = true;
        copyOfMovies.splice([index], 1, copyThisMovie);
        setMovies(copyOfMovies);
    }

    return(
        <section>
            <h2><u>Movie List</u></h2>
            <MovieWatchListForm addMovie={addMovie}/>
            <MovieList moviesData={movies} watchedMovie={watchedMovie}/>
        </section>
    )
}

export default MovieListBox;