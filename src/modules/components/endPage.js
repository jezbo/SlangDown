import React from 'react';
import Menu from './menu';
import Score from './score';
import GameLetters from './gameLetters';
import WordConstructor from './wordConstructor';
import Button from './button';

const EndPage = (props) => {
    const properties = props.properties;

    return (
        <div className="game-grid">
            <div className="menu-container game">
                <Menu />
            </div>
            <div className="score-container game">
                <Score properties={properties} />
            </div>
            <div className="tiles-container game">
                <div className="letterTiles-container">
                    <GameLetters properties={properties} />
                </div>
                <Button properties={properties} />
            </div>
        </div>
    )
}

export default EndPage;