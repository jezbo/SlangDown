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
    const properties = props.properties;
    
    //********************ANSWERS***********************
    
    const answers = iterateComponent(SubmittedWord,properties.savedWords,properties);

    //***************Timeout to Gameover****************

    

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