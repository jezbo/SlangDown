import React, { useEffect } from 'react';
import Menu from './menu';
import Score from './score';
import GameLetters from './gameLetters';
import WordConstructor from './wordConstructor';
import SubmittedWord from './submittedWord';

import Button from './button';
import iterateComponent from '../functions/iterateComponent';

const EndPage = (props) => {
    const properties = props.properties;
    const answers = iterateComponent(SubmittedWord,properties.savedWords,properties);
    useEffect(() => {
        properties.setGameTileState(properties.bigTileSwitches);
    })
    
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