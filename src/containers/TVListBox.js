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
            avEpisodeLength: 30,
            isWatched: false
        }
    ]);

    const addTV = (ContentData) => {
        const copyOfTV = [...tv, ContentData];
        setTV(copyOfTV);
    }

    const watchedTV = (index) => {
        const copyOfTV = [...tv];
        const copyThisTV = tv[index];
        copyThisTV.isWatched = true;
        copyOfTV.splice([index], 1, copyThisTV);
        setTV(copyOfTV);
    }

    return(
        <section>
            <h2><u>TV List</u></h2>
            <TVWatchListForm addTV={addTV}/>
            <TVList tvData={tv} watchedTV={watchedTV}/>
        </section>
    );
}

export default TVListBox;