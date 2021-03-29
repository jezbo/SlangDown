import saveWord from './saveWord';

const handleButtonClick = async (event, properties) => {
    const gameState=properties.gameState;

    //*******HANDLE STATE AT START AND END*********
    if(
        gameState==='start'
        ||
        gameState==='end'
    ){
        properties.setGameState('middle');
        properties.setScore(0);
        properties.setSavedWords([]);
        properties.setWord([]);
        properties.setGameTileState(properties.bigTileSwitches);
    }
    //************ADD WORD DURING GAME*************
    else if(
        gameState==='middle'
        &&
        properties.word
    ) {
        const newWord = properties.word.join(''); 
        if(newWord && newWord.length>0) {
            saveWord(newWord, properties);
            properties.setWord([]);
            properties.setOriginIndex([]);
            properties.setGameTileState(properties.bigTileSwitches)
        }
        
    }
}

export default handleButtonClick;