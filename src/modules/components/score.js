/*
    Displays the score
*/

import React from 'react';

// functional component
const Score = (props) => {

    // Simplify access to State/Global Variable library
    const properties = props.properties;

    console.log(properties.gameState);

    return (
        <div className="score">
            {properties.gameState==='start' ? <p>0</p> : <p>{properties.score}</p>}
        </div> 
    )
}

export default Score;