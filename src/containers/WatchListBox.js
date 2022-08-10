import React, { useState } from "react";
import MovieListBox from "./MovieListBox";
import TVListBox from "./TVListBox";

const WatchListBox = () => {

    return(
        <>
            <h1>Watch List</h1>
            <div className="listBox">
                <MovieListBox className='MovieListBox'/>
                <TVListBox className='TVListBox'/>
            </div>
        </>
    )
}

export default WatchListBox;