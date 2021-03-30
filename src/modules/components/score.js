import React from 'react';

const Score = (props) => {
    const properties = props.properties;
    console.log(properties.gameState);
    const instructions = ( 
        <div className="startInstructions">
            <div className="instructionsContainer">
                <p>Find Slang Words</p>
                <p>Get Points</p>
                <p>Bigger Words</p>
                <p>Bigger Points</p>
                <p>!!BUT!!</p>
                <p>Innacuracy</p> 
                <p>Loses Points</p>
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