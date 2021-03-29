const setScore = (wordLength,veracity,scoreFunction) => {

      const points = veracity ? wordLength : (wordLength*(-1)); 
      scoreFunction((prev) => prev+points); 
  }

  export default setScore;