const addLetter = (value,index,properties) => {
    properties.setWord((prev) => [...prev, value]);
    properties.setOriginIndex([...properties.originIndex, index])
    properties.setGameTileState((prevState) => {
        let change = {...prevState};
        change[index]=true;
        return change;
    })
}

export default addLetter;