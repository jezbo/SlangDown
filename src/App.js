import React, { useState } from 'react';
import Word from './modules/word';
import Menu from './modules/menu';
import Score from './modules/score';
import Tiles from './modules/tiles';
import BarTimer from './modules/barTimer'
import iterateComponent from './modules/iterateComponent';
import veracityOfDefinitions from'./modules/wordVeracity';

const App = () => {

//*********************************STATE DECLARATIONS***********************************
  const [letters,setLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [savedWords, setSavedWords] = useState([]);
  const [wordVeracity,setWordVeracity] = useState([])
  

//*******************************SCORE FUNCTION*****************************************

const scoreFunction = (points) => {
  if(typeof(points)==="number") setScore(score+points)
}
  
//**********************************ANSWER FUNCTIONS*************************************

  const saveWord = async (word) => {
    const wordIsUnique = !savedWords.includes(word);
    if(wordIsUnique) setSavedWords((prev) => [...prev, word])
    const veracity = await veracityOfDefinitions(word);
    setWordVeracity((prev) => [...prev, veracity]);
    veracity ? scoreFunction(word.length) : scoreFunction(-1*word.length)
  }

  const removeWord = (index) => {
    setSavedWords((prev) => prev.filter((e,i) => index!==i));
  }

  const answersProperties = {
    removeWord: removeWord,
    veracity: wordVeracity,
    score: scoreFunction,
  }
  const answers = iterateComponent(Word,savedWords,answersProperties)


//*********************************COMPONENTS********************************************
  return(
    <div className="grid-container">
      <div className="menu-container">
        <Menu />
      </div>
      <div className="score-container">
        <Score value={score} />
      </div>
     
        <BarTimer time={30} />
     
      <ul className="word-container"> 
        {answers} 
      </ul>
      <div className="tiles-container">
        <Tiles  
          saveWord={saveWord}
        />
      </div>
    </div>
  )
}

export default App;
