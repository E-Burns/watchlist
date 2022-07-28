import React, { useState } from "react";

const WatchListForm = ({addContent}) => {

    const [titleInput, setTitleInput] = useState('');
    const [directorInput, setDirectorInput] = useState('');
    const [watchTimeInput, setWatchTimeInput] = useState('');

    const handleTitleInput = (event) => {
        setTitleInput(event.target.value);
    }

    const handleDirectorInput = (event) => {
        setDirectorInput(event.target.value);
    }

    const handleWatchTimeInput = (event) => {
        setWatchTimeInput(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const titleToSubmit = titleInput.trim();
        const directorToSubmit = directorInput.trim();
        const watchTimeToSubmit = watchTimeInput.trim();

        if(!titleToSubmit || !directorToSubmit || !watchTimeToSubmit){
            return;
        }

        setTitleInput('');
        setDirectorInput('');
        setWatchTimeInput('');

        const contentToSubmit = {
            title: titleToSubmit,
            director: directorToSubmit,
            watchTime: watchTimeToSubmit
        }
        addContent(contentToSubmit);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input 
                onChange={handleTitleInput}
                type="text"
                placeholder="Title"
                value={titleInput}
            />
            <input 
                onChange={handleDirectorInput}
                type="text"
                placeholder="Director"
                value={directorInput}
            />
            <input 
                onChange={handleWatchTimeInput}
                type="text"
                placeholder="Watch time (mins)"
                value={watchTimeInput}
            />
            <input 
                type="submit"
                value="Submit"
            />
        </form>
    )
}

export default WatchListForm;