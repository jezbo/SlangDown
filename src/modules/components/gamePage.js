import React from 'react';
import iterateComponent from '../functions/iterateComponent';
import Menu from './menu';
import Score from './score';
import SubmittedWord from './submittedWord';
import BarTimer from './barTimer'
import GameLetters from './gameLetters';
import WordConstructor from './wordConstructor';
import Button from './button';

const GamePage = (props) => {
    const properties = props.properties;
    //********************ANSWERS***********************
    
    const answers = iterateComponent(SubmittedWord,properties.savedWords,properties);

    //***************Timeout to Gameover****************
    const gameTimeout = setTimeout(() => {
        properties.setGameState('end');
        clearTimeout(gameTimeout)
    }, (properties.time*1000))
    //**********************JSX*************************
    return (
        <div className="game-grid">
            <div className="menu-container game">
                <Menu />
            </div>
            <div className="score-container game">
                <Score properties={properties} />
            </div>
            <BarTimer properties={properties} />
            <ul className="word-container"> 
                {answers} 
            </ul>
            <div className="tiles-container game">
                <div className="letterTiles-container">
                    <GameLetters properties={properties} />
                </div>
                <div className="babyTiles-container">
                    <WordConstructor properties={properties} />
                </div>
                <div className="button-container">
                    <Button properties={properties} />
                </div>
                
            </div>
        </div>
    )
}

export default GamePage;