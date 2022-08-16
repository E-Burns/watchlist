import React, { useState } from "react";

const TV = ({title, watched, children}) => {
    return(
        <li className="tv-list">
            <h3>{title}{watched}</h3>
            {children}
        </li>
    )
}

export default TV;