import React, { useState } from "react";
import MovieList from "../components/MovieList";
import WatchListForm from "../components/WatchListForm";

const WatchListBox = () => {

    const[movies, setMovies] = useState([
        {
            title: 'Spider-Man',
            director: 'Sam Raimi',
            watchTime: 121
        }
    ])

    const addContent = (contentData) => {
        //if statement to split movies and tv
        const copyOfMovies = [...movies, contentData];
        setMovies(copyOfMovies);
    }

    return(
        <>
            <h1>Watch List</h1>
            <WatchListForm addContent={addContent}/>
            <MovieList moviesData={movies}/>
        </>
    )
}

export default WatchListBox;