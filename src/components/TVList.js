import React, { useState } from "react";
import TV from './TV';

const TVList = ({tvData, watchedTV}) => {

    const changeWatched = (index) => {
        watchedTV(index);
    }

    const tvToBeDisplayed = tvData.map((tv, index) => {
        return(
            <TV 
            title={tv.title} 
            watched={tv.isWatched ? <span className="watched">Watched</span> : <button onClick={() => changeWatched(index)}>Not Watched</button>}
            key={index}>
                <p><b>Director:</b> {tv.director}</p>
                <p><b>No. Seasons:</b> {tv.numberOfSeasons}, <b>No. Episodes:</b> {tv.numberOfEps}</p>
                <p><b>Average Episode Length(mins):</b> {tv.avEpisodeLength}</p>
            </TV>
        );
    });

    return(
        <>
            <ul>{tvToBeDisplayed}</ul>
        </>
    )
}

export default TVList;