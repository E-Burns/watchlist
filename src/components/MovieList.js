import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = ({moviesData, watchedMovie}) => {

    const changeWatched = (index) => {
        watchedMovie(index);
    }

    const moviesToBeDisplayed = moviesData.map((movie, index) => {

        return(
            <Movie title={movie.title} key={index}>
                <p><b>Director:</b> {movie.director}</p>
                <p><b>Genre:</b> {movie.genre}</p>
                <p><b>Watch Time(mins):</b> {movie.watchTime}</p>

                {movie.isWatched ? <span className="watched">Watched</span> : <button onClick={() => changeWatched(index)}>Not Watched</button>}
            </Movie>
        );
    });

    return(
        <>
            <ul>{moviesToBeDisplayed}</ul>
        </>
    );
}

export default MovieList;