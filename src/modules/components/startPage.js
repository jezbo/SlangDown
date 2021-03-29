import React from 'react';
import Menu from './menu';
import Score from './score';
import GameLetters from './gameLetters'
import WordConstructor from './wordConstructor';
import Button from './button';

const StartPage = (props) => {
    const properties = props.properties;

    return (
        <div className="start-grid">
            <div className="menu-container start">
                <Menu />
            </div>
            <div className="score-container start">
                <Score properties={properties} />
            </div>
            <div className="tiles-container start">
                <div className="letterTiles-container">
                    <GameLetters properties={properties} />
                </div>
                <Button properties={properties} />
            </div>
        </div>
    )
}

export default StartPage;