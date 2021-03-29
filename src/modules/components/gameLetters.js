import React from 'react';
import GameTile from './gameTile';
import iterateComponent from '../functions/iterateComponent';


const GameLetters = (props) => {
    const properties=props.properties;
    
    const gameTiles=iterateComponent(GameTile,properties.gameTiles,properties);
    const endTiles=iterateComponent(GameTile,properties.gameOverTiles,properties);
    const showTiles= properties.gameState==='end' ? endTiles : gameTiles;

    return showTiles;
}

export default GameLetters;