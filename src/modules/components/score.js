import React from 'react';

const Score = (props) => {
    const properties = props.properties;

    return(
         <div className="score">
            <p>{properties.gameState==='middle' ? properties.score : ''}</p>
        </div>
    )
    
}

export default Score;