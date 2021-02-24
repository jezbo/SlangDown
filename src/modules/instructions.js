import React, { useState, useEffect } from 'react';

const Instructions = (props) => {
    
    const [onOff,setOnOff] = useState(false);

    useEffect (() => {
        setOnOff(props.onClick)
    }, [props.onClick])

    const instructionsStyle = {
        display: onOff ? "flex" : "none",
        gridArea: "1/1/span 2/span 2",
    }
    return (
        <div className="instructions" style={instructionsStyle}>
            <p>Find the longest slang word before the time runs out!</p>
        </div>
    )
}

export default Instructions; 