import React, { useState } from "react";
import TV from './TV';

const TVList = ({tvData}) => {

    const tvToBeDisplayed = tvData.map((tv) => {
        return(
            <TV title={tv.title} key={tv.title}>
                <p><b>Director:</b> {tv.director}</p>
                <p><b>No. Seasons:</b> {tv.numberOfSeasons}</p>
                <p><b>No. Episodes:</b> {tv.numberOfEps}</p>
                <p><b>Average Episode Length(mins):</b> {tv.avEpisodeLength}</p>
            </TV>
        );
    });

    return(
        <>
            <h2><u>TV List</u></h2>
            <ul>{tvToBeDisplayed}</ul>
        </>
    )
}

export default TVList;