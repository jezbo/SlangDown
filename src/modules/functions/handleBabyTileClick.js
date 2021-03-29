import removeLetter from '../functions/removeLetter';

const handleBabyTileClick = (event,properties,index) => {
    const originIndex = properties.originIndex[index];
    removeLetter(properties,index,originIndex)
}

export default handleBabyTileClick;