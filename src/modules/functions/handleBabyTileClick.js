/*
    REVIEW: Is this component required?
    Sets in motion the removal of a babyTile
    after it has been clicked.
*/


import removeLetter from '../functions/removeLetter';

const handleBabyTileClick = (event,properties,index) => {
    const originIndex = properties.originIndex[index];
    removeLetter(properties,index,originIndex)
}

export default handleBabyTileClick;