const setWordDefinition = (wordData, setDefinition, wordEvaluation) => {
    const veracity = wordEvaluation.veracious;
    const index = wordEvaluation.index;
    if(veracity) {
        const definition =  JSON.stringify(wordData[index].definition);
        setDefinition((prev) => [...prev, definition]
        )
    }
    else if(!veracity) {
        setDefinition((prev) => [...prev, 'Are you sure that\'s a word?']
        )
    }


}

export default setWordDefinition;