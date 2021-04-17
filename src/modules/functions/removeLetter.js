/*
    Called by handleBabyTileCLick
    Removes the clicked letter from the word
    being spelled and restores the corresponding 
    gameTile's availability.  
*/

const removeLetter = (properties,index,origin) => {
    // filter the letter from the word state array
    properties.setWord((prevState) => prevState.filter((element,i) => i!==index));
    // restore corrsponding gameTile state so it is available
    properties.setGameTileState((prevState) => {
    let change = {...prevState};
    change[origin]=false;
    return change
    });
    // remove record of where babyTile originated in gameTiles index
    properties.setOriginIndex((prevState) => prevState.filter((element,i ) => i!==index))
}

export default removeLetter;