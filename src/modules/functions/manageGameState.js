/*
    Called by startPage, gamePage and endPage
    manages the game state change when either 
    the start or restart buttons are clicked
    or when the gamePage time runs out. 
*/

import startGame from './startGame';

const manageGameState = (properties) => {
    if(
        properties.gameState==='start' 
        || 
        properties.gameState==='end'
    ){
        startGame(properties);
    } 
    else if(properties.gameState==='middle') properties.setGameState('end');
}

export default manageGameState;