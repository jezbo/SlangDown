/*
    imported by handleGameTileClick.js
    Adds the value of a clicked gameTile 
    to the word state which is then printed
    by wordConstructor.js.
    It sets the clicked gameTiles state so it is
    no longer active.
    And sets the originIndex state linking the created 
    babyTile in wordConstructor to its index origin in the
    gameTiles for reversal.
*/

const addLetter = (value,index,properties) => {
    
    // add letter to word array to spell current word
    properties.setWord((prev) => [...prev, value]);
    
    // record where the letter cam from in the gameTiles 
    properties.setOriginIndex([...properties.originIndex, index])

    // change the state of the selected gameTile
    properties.setGameTileState((prevState) => {
        let change = {...prevState};
        change[index]=true;
        return change;
    })
}

export default addLetter;