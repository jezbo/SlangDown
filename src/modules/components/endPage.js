import React from 'react';
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

    return (
        <div className="game-grid">
            <div className="menu-container game">
                <Menu />
            </div>
            <div className="score-container game">
                <Score properties={properties} />
            </div>
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
                <Button properties={properties} />
            </div>
        </div>
    )
}

export default EndPage;