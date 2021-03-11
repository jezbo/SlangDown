import React from 'react';
import Tiles from './tiles';
import Menu from './menu';
import Score from './score';
import BarTimer from './barTimer'

const GamePage = (props) => {
    return (
        <div className="game-grid">
            <div className="menu-container game">
                <Menu />
            </div>
            <div className="score-container game">
                <Score value={props.properties.score} />
            </div>
            <BarTimer time={props.properties.time} />
            <ul className="word-container"> 
                {props.properties.answers} 
            </ul>
            <div className="tiles-container game">
                <Tiles 
                    manageGameState={props.properties.manageGameState}
                    gameState={props.properties.gameState}
                    saveWord={props.properties.saveWord}
                    letters={props.properties.letters}
                />
            </div>
        </div>
    )
}

export default GamePage;