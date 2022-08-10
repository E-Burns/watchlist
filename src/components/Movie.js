import React from "react";

const Movie = ({title, children}) => {
    return(
        <>
            <li className="movie-list">
                <h3>{title}</h3>
                {children}
            </li>
        </>
    )
}

export default Movie;