/*
    Time is up, GameOver, App moves to this page as gameState
    is set to 'end'.
*/

//Module imports
import React, { useEffect } from 'react';
import Menu from './menu';
import Score from './score';
import GameLetters from './gameLetters';
import WordConstructor from './wordConstructor';
import SubmittedWord from './submittedWord';
import Button from './button';
import iterateComponent from '../functions/iterateComponent';

//Functional Component
const EndPage = (props) => {

    //Simplify access to State/Global Variable library
    const properties = props.properties;

    // Display answers from finished game 
    // (these will become interactive with 
    // definitions onClick)
    const answers = iterateComponent(SubmittedWord,properties.savedWords,properties);

    //set gameTile state on page mounting
    useEffect(() => {
        properties.setGameTileState(properties.bigTileSwitches);
    }, [])
    
    //**********************************JSX***********************************
    return (
        <div className="game-grid">
            <div className="menu-container">
                <Menu />
            </div>
            <div className="score-container">
                <Score properties={properties} />
            </div>
            <ul className="word-container"> 
                {answers} 
            </ul>
            
                <div className="letterTiles-container">
                    <GameLetters properties={properties} />
                </div>
                <div className="babyTiles-container">
                    <WordConstructor properties={properties} />
                </div>
                <Button properties={properties} />
        </div>
    )
}

export default EndPage;