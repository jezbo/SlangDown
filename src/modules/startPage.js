import React from 'react';
import Tiles from './tiles';
import Menu from './menu';
import Score from './score';

const StartPage = (props) => {
    return (
        <div className="start-grid">
            <div className="menu-container start">
                <Menu />
            </div>
            <div className="score-container start">
                <Score />
            </div>
            <div className="tiles-container start">
                <Tiles 
                    manageGameState={props.manageGameState}
                    gameState={props.gameState}
                />
            </div>
        </div>
    )
}

export default StartPage;