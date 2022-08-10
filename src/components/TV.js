import React, { useState } from "react";

const TV = ({title, children}) => {
    return(
        <li className="tv-list">
            <h3>{title}</h3>
            {children}
        </li>
    )
}

export default TV;