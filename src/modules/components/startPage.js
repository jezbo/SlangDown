/*
    User is greeted by this page after starting App
    it has menu (currently empty), instructions, name 
    of game and start button.
*/

import React from 'react';
import Menu from './menu';
import Score from './score';
import GameLetters from './gameLetters'
import WordConstructor from './wordConstructor';
import Button from './button';
import BarTimer from './barTimer';

const StartPage = (props) => {

    // Simplify access to State/Global Variable library
    const properties = props.properties;


    //*************************************JSX************************************
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
            </ul>
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
    )

}

export default StartPage;