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