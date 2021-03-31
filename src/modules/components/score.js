import React from 'react';

const Score = (props) => {
    const properties = props.properties;
    console.log(properties.gameState);
    const instructions = ( 
         <div className="startInstructions">
            <div className="instructionsContainer">
                <p>Bigger Slang Words</p>
                <p>Win (or Lose)</p>
                <p>Bigger Points</p> 
               
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