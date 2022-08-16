import React, { useState } from "react";

const MovieWatchListForm = ({addMovie}) => {

    const [titleInput, setTitleInput] = useState('');
    const [directorInput, setDirectorInput] = useState('');
    const [genreInput, setGenreInput] = useState('');
    const [watchTimeInput, setWatchTimeInput] = useState('');

    const handleTitleInput = (event) => {
        setTitleInput(event.target.value);
    }

    const handleDirectorInput = (event) => {
        setDirectorInput(event.target.value);
    }

    const handleGenreInput = (event) => {
        setGenreInput(event.target.value);
    }

    const handleWatchTimeInput = (event) => {
        setWatchTimeInput(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const titleToSubmit = titleInput.trim();
        const directorToSubmit = directorInput.trim();
        const genreToSubmit = genreInput.trim();
        const watchTimeToSubmit = watchTimeInput.trim();

        if(!titleToSubmit || !directorToSubmit || !genreToSubmit || !watchTimeToSubmit){
            return;
        }

        setTitleInput('');
        setDirectorInput('');
        setGenreInput('');
        setWatchTimeInput('');

        const movieToSubmit = {
            title: titleToSubmit,
            director: directorToSubmit,
            genre: genreToSubmit,
            watchTime: watchTimeToSubmit,
            isWatched: false
        }
        addMovie(movieToSubmit);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <div>
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
                    onChange={handleGenreInput}
                    type="text"
                    placeholder="Genre"
                    value={genreInput}
                />
            </div>

            <div>
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
            </div>
        </form>
    )
}

export default MovieWatchListForm;