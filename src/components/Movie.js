import React from "react";

const Movie = ({title, children}) => {
    return(
        <>
            <li>
                <h3>{title}</h3>
                {children}
            </li>
        </>
    )
}

export default Movie;