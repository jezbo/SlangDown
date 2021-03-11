import React from 'react';
import Menu from './menu';
import Score from './score';
import Tiles from './tiles';

const EndPage = (props) => {
    return (
        <div className="game-grid">
            <div className="menu-container game">
                <Menu />
            </div>
            <div className="score-container game">
                <Score value={props.properties.score} />
            </div>
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

export default EndPage;