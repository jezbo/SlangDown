/*
    Displays the score on gamePage & endPage 
    (gameState==='middle' or 'end') and instructions 
    on start Page (gameState==='start').
*/

import React from 'react';

// functional component
const Score = (props) => {

    // Simplify access to State/Global Variable library
    const properties = props.properties;

    console.log(properties.gameState);

    //JSX if startPage
    const instructions = ( 
         <div className="startInstructions">
            <div className="instructionsContainer">
                <p>Bigger Slang Words</p>
                <p>Win (or Lose)</p>
                <p>Bigger Points</p> 
               
            </div>
        </div>  
    );

    //JSX if gamePage or endPage
    const scoreDisplay = (
        <div className="score">
            <p>{properties.score}</p>
        </div> 
    );
    

    //return correct JSX dependent on gameState
    return properties.gameState==='start' ? instructions : scoreDisplay;
    
}

export default Score;