import React from 'react';
import GameTile from './gameTile';
import iterateComponent from '../functions/iterateComponent';


const GameLetters = (props) => {
    const properties=props.properties;
    
    const gameTiles=iterateComponent(GameTile,properties.gameTiles,properties);

    return gameTiles;
}

export default GameLetters;