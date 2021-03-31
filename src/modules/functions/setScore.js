const setScore = (wordLength,veracity,scoreFunction) => {

      const points = veracity==='good' ? wordLength : (wordLength*(-1)); 
      scoreFunction((prev) => prev+points); 
  }

  export default setScore;