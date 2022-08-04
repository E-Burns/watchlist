import React, { useState } from "react";
import TVList from '../components/TVList';
import TVWatchListForm from "../components/TVWatchListForm";

const TVListBox = () => {

    const[tv, setTV] = useState([
        {
            title: 'Our Flag Means Death',
            director: 'David Jenkins and Taika Waititi',
            numberOfSeasons: 1,
            numberOfEps: 10,
            avEpisodeLength: 26
        }
    ])

    const addTV = (ContentData) => {
        const copyOfTV = [...tv, ContentData];
        setTV(copyOfTV);
    }

    return(
        <>
            <TVWatchListForm addTV={addTV}/>
            <TVList tvData={tv}/>
        </>
    )
}

export default TVListBox;