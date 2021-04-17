//handles the gameTile being clicked during gameplay

import addLetter from "./addLetter";

const handleGameTileClick = (value,properties,index) => {
    //console.log('handleGameTileClick value: ' + value)
    // if not gameplay return nothing from click
    if(
        properties.gameState==='start'
        ||
        properties.gameState==='end'
        )
        {
            return;
        }
    // id in gameplay then addLetter.js makes various state changes    
    else if(!properties.gameTileState[index]) addLetter(value,index,properties);
}

export default handleGameTileClick