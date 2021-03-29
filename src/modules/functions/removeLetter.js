const removeLetter = (properties,index,origin) => {
    properties.setWord((prevState) => prevState.filter((element,i) => i!==index));
    properties.setGameTileState((prevState) => {
    let change = {...prevState};
    change[origin]=false;
    return change
    });
    properties.setOriginIndex((prevState) => prevState.filter((element,i ) => i!==index))
}

export default removeLetter;