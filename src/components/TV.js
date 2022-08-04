import React, { useState } from "react";

const TV = ({title, children}) => {
    return(
        <>
            <h3>{title}</h3>
            {children}
        </>
    )
}

export default TV;