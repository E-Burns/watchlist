import React from "react";

const Movie = ({title, watched, children}) => {
    return(
        <>
            <li className="movie-list">
                <h3>{title}{watched}</h3>
                {children}
            </li>
        </>
    )
}

export default Movie;