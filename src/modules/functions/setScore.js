// const setScore = (wordLength,veracity,scoreFunction) => {

//       const points = veracity==='good' ? wordLength : (wordLength*(-1)); 
//       scoreFunction((prev) => prev+points); 
//   }

//   export default setScore;

const setScore = (properties) => {
    const savedWords = properties.savedWords;
    const wordVeracity = properties.wordVeracity;
    const setScore = properties.setScore;
    let scoreTally = 0;

    savedWords.forEach((word,i) => {
        const baseScore = word.length;
        while(!wordVeracity[i]) {
            return
        } 
        const wordScore = wordVeracity[i]==='good' ? baseScore : baseScore*(-1); 
        scoreTally += wordScore;
    })
    setScore(scoreTally)
}

export default setScore;