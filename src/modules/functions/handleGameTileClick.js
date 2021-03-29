import addLetter from "./addLetter";

const handleGameTileClick = (value,properties,index) => {
    //console.log('handleGameTileClick value: ' + value)
    if(
        properties.gameState==='start'
        ||
        properties.gameState==='end'
        )
        {
            return;
        }
    else if(!properties.gameTileState[index]) addLetter(value,index,properties);
}

export default handleGameTileClick