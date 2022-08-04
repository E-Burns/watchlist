import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = ({moviesData}) => {

    const moviesToBeDisplayed = moviesData.map((movie) => {
        return(
            <Movie title={movie.title} key={movie.title}>
                <p><b>Director:</b> {movie.director}</p>
                <p><b>Genre:</b> {movie.genre}</p>
                <p><b>Watch Time(mins):</b> {movie.watchTime}</p>
            </Movie>
        );
    });

    return(
        <>
            <h2><u>Movie List</u></h2>
            <ul>{moviesToBeDisplayed}</ul>
        </>
    );
}

export default MovieList;