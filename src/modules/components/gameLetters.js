/*
    Like scrabble tiles these are the 9 tiles that display
    the letters the user will play with.
    On start page displays 'SLANGDOWN'
    On end Page displays 'GAMEOVER!'
    Utilises the GameTile component module - a single tile
*/

import GameTile from './gameTile';
import iterateComponent from '../functions/iterateComponent';

const GameLetters = (props) => {
    //Simplify access to State/Global Variables Library
    const properties=props.properties;

    // Create the playable letter tiles by iterating over an array of 
    // letters (properties.gameTiles) - in current build this is the
    // same as start page letters 'SLANGDOWN' (until a better way of 
    // picking a good letter spread is established)
    const gameTiles=iterateComponent(GameTile,properties.gameTiles,properties);
    /// Create endPage 'GameOver!' Tiles 
    const endTiles=iterateComponent(GameTile,properties.gameOverTiles,properties);

    // display tiles dependent on gameState, 'start'/'middle'/'end'
    const showTiles= properties.gameState==='end' ? 
        endTiles 
        : 
        gameTiles;

    return showTiles;
}

export default GameLetters;