/*
    Takes the data (list of definitions etc.) 
    retuned from the API and evaluates if the 
    word is accepted as good or bad based on no. 
    of upvotes on urbanDictionary or lack of data.
    Returns outcome.
*/

const evaluateWord = (data) => {

    if(data) console.log('evaluateWord, data: ' + data)

    let numberOfDefinitions;

    // find no. of fetched definitions
    if(data) {
        numberOfDefinitions = data.length;
    }

    // if error not being caught and this is 
    // printed, lack of data could be issue
    //tho this should already be caught
    if(!data) {
        console.log('evaluateWord: no data')
    }


    const minThumbsUp = 700;
    let i = 0;
    let veracious = false;
    
    //loop over list of definitions to find
    //if any are acceptable
    const veracity = () => {
        while(i<numberOfDefinitions && veracious===false) {
            JSON.stringify(data[i].thumbs_up)>minThumbsUp ? 
                veracious='good' 
                :
                veracious='bad';
            i++;
        }
        //if the loop fails to give an answer assume bad
        if(veracious===false) veracious='bad';   
    }   

    veracity();
    //record veracity of word in state
    if(
        data 
        && 
        data.length>0 
        && 
        (veracious==='good' || veracious==='bad')
    ) console.log('evaluateWord, thumbs up at i-1: ' + data[i-1].thumbs_up)
    return {
        veracious, 
        i: i-1
    }
}

export default evaluateWord;