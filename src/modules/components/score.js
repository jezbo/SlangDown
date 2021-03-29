import React from 'react';

const Score = (props) => {
    const properties = props.properties;
    console.log(properties.gameState);
    const instructions = ( 
        <div className="startInstructions">
            <div className="instructionsContainer">
                <p>FIND SLANG WORDS</p>
                <p>GET POINTS</p>
                <p>BIGGER WORDS</p>
                <p>BIGGER POINTS</p>
                <p>!!BUT!!</p>
                <p>WRONG WORDS LOSE POINTS</p>
            </div>
        </div>
    );

    const scoreDisplay = (
        <div className="score">
            <p>{properties.score}</p>
        </div> 
    );
    
    return properties.gameState==='start' ? instructions : scoreDisplay;
    
}

export default Score;