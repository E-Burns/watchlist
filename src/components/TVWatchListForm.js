import React, { useState } from "react";

const TVWatchListForm = ({addTV}) => {

    const [titleInput, setTitleInput] = useState('');
    const [directorInput, setDirectorInput] = useState('');
    const [seasonsInput, setSeasonsInput] = useState('');
    const [episodesInput, setEpisodesInput] = useState('');
    const [episodeLengthInput, setEpisodeLengthInput] = useState('');

    const handleTitleInput = (event) => {
        setTitleInput(event.target.value);
    }

    const handleDirectorInput = (event) => {
        setDirectorInput(event.target.value);
    }

    const handleSeasonsInput = (event) => {
        setSeasonsInput(event.target.value);
    }

    const handleEpisodesInput = (event) => {
        setEpisodesInput(event.target.value);
    }

    const handleEpisodeLengthInput = (event) => {
        setEpisodeLengthInput(event.target.value);
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const titleToSubmit = titleInput.trim();
        const directorToSubmit = directorInput.trim();
        const seasonsToSubmit = seasonsInput.trim();
        const episodesToSubmit = episodesInput.trim();
        const episodeLengthToSubmit = episodeLengthInput.trim();

        if(!titleToSubmit || !directorToSubmit|| !seasonsToSubmit || !episodesToSubmit || !episodeLengthToSubmit){
            return;
        }

        setTitleInput('');
        setDirectorInput('');
        setSeasonsInput('');
        setEpisodesInput('');
        setEpisodeLengthInput('');

        const tvToSubmit = {
            title: titleToSubmit,
            director: directorToSubmit,
            numberOfSeasons: seasonsToSubmit,
            numberOfEps: episodesToSubmit,
            avEpisodeLength: episodeLengthToSubmit
        }
        addTV(tvToSubmit);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input
                onChange={handleTitleInput}
                type='text'
                placeholder="Title"
                value={titleInput}
                />
            <input
                onChange={handleDirectorInput}
                type='text'
                placeholder="Director"
                value={directorInput}
                />
            <input
                onChange={handleSeasonsInput}
                type='text'
                placeholder="No. Seasons"
                value={seasonsInput}
                />
            <input
                onChange={handleEpisodesInput}
                type='text'
                placeholder="No. Eps"
                value={episodesInput}
                />
            <input
                onChange={handleEpisodeLengthInput}
                type='text'
                placeholder="Avg Ep Length (mins)"
                value={episodeLengthInput}
                />
            <input 
                type="submit"
                value="Submit"
            />
        </form>
    )
}

export default TVWatchListForm;