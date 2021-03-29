const evaluateWord = (data) => {
    if(data) console.log('evaluateWord, data: ' + data)
    let numberOfDefinitions;
    if(data) {
        numberOfDefinitions = data.length;
    }
    const minThumbsUp = 700;
    let i = 0;
    let veracious = false;
    
    const veracity = () => {
        if(data) {
            while(i<numberOfDefinitions && veracious===false) {
                JSON.stringify(data[i].thumbs_up)>minThumbsUp ? 
                    veracious=true 
                    :
                    veracious=false;
                i++;
               }
            } 
        else veracious=false;   
    }   
    veracity();
    //record veracity of word in state
    if(veracious) console.log('evaluateWord, thumbs up at i-1: ' + data[i-1].thumbs_up)
    console.log('line24 evaluateWord, is it veracious?: ' + veracious)
    return {
        veracious, 
        i: i-1
    }
}

export default evaluateWord;