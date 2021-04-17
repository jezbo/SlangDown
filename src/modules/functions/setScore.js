/*
    sets the score by iterating over savedWords
    For correct words their length is added
    For incorrect words their scores are subtracted. 
*/

const setScore = (properties) => {

    const savedWords = properties.savedWords;
    const wordVeracity = properties.wordVeracity;
    const setScore = properties.setScore;
    let scoreTally = 0;

    // iterate over all submitted words
    savedWords.forEach((word,i) => {
        // estabish score magnitude
        const baseScore = word.length;
        // ensure veracity is set for each word
        while(!wordVeracity[i]) {
            return
        } 
        // calculate word score dependent on veracity of word
        const wordScore = wordVeracity[i]==='good' ? baseScore : baseScore*(-1); 
        // add word score to tally of of all word scores
        scoreTally += wordScore;
    })
    // commit total score to state
    setScore(scoreTally)
}

export default setScore;