const evaluateWord = (data) => {
    if(data) console.log('evaluateWord, data: ' + data)
    let numberOfDefinitions;
    if(data) {
        numberOfDefinitions = data.length;
    }
    if(!data) {
        console.log('evaluateWord no data')
    }
    console.log('wtf gwan??: ' + data)
    const minThumbsUp = 700;
    let i = 0;
    let veracious = false;
    
    const veracity = () => {
        while(i<numberOfDefinitions && veracious===false) {
            JSON.stringify(data[i].thumbs_up)>minThumbsUp ? 
                veracious='good' 
                :
                veracious='bad';
            i++;
            }
        } 
        if(veracious===false) veracious='noDef';   

    veracity();
    //record veracity of word in state
    if(veracious==='good' || veracious==='bad') console.log('evaluateWord, thumbs up at i-1: ' + data[i-1].thumbs_up)
    console.log('line24 evaluateWord, is it veracious?: ' + veracious)
    return {
        veracious, 
        i: i-1
    }
}

export default evaluateWord;