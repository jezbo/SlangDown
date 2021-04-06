import React from 'react';
import Menu from './menu';
import Score from './score';
import GameLetters from './gameLetters'
import WordConstructor from './wordConstructor';
import Button from './button';
import BarTimer from './barTimer';

const StartPage = (props) => {
    const properties = props.properties;
    let answers;
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

export default StartPage;