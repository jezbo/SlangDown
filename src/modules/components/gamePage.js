/*
    User selects to start game, gameState is set to 'middle'
    and this page is loaded. From here the game is played until 
    time is up.
*/

// Module imports
import React, { useEffect } from 'react';
import iterateComponent from '../functions/iterateComponent';
import Menu from './menu';
import Score from './score';
import SubmittedWord from './submittedWord';
import BarTimer from './barTimer'
import GameLetters from './gameLetters';
import WordConstructor from './wordConstructor';
import Button from './button';

const GamePage = (props) => {

    //Simplify access to State/Global Variable library
    const properties = props.properties;
    
    //********************ANSWERS***********************
    //display answers, right or worng (styling will differentiate this)
    const answers = iterateComponent(SubmittedWord,properties.savedWords,properties);

    //***************Timeout to Gameover****************
    //Game has time limit, change gameState to 'end' after timeout
    //timeOut starts on page mount and cleared on dismount
    useEffect(() => {
        let gameTimeout = setTimeout(() => {
            properties.setGameState('end');
        }, (properties.time*1000))
        return () => clearTimeout(gameTimeout)
    }, [])

    //**********************JSX*************************
    return (
        <div className="game-grid">
            <div className="menu-container">
                <Menu />
            </div>
            <div className="score-container">
                <Score properties={properties} />
            </div>
            <BarTimer properties={properties} />
            <ul className="word-container"> 
                {answers} 
            </ul>
            {/* <div className="tiles-container"> */}
                <div className="letterTiles-container">
                    <GameLetters properties={properties} />
                </div>
                <div className="babyTiles-container">
                    <WordConstructor properties={properties} />
                </div>
                <div className="button-container">
                    <Button properties={properties} />
                {/* </div> */}
                
            </div>
        </div>
    )
}

export default GamePage;