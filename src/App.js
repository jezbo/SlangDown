import React, { useState } from 'react';
import Word from './modules/word';
import Menu from './modules/menu';
import Timer from './modules/timer';
import Tiles from './modules/tiles';
import iterateComponent from './modules/iterateComponent';

const App = () => {
  const [savedWords, setSavedWords] = useState([]);
  const saveWord=(word)=>{
    const first = savedWords.includes(word);
    if(!first) setSavedWords((prev) => [...prev, word])
}

const removeWord = (index) => {
  setSavedWords((prev) => prev.filter((e,i) => index!==i));
}

const answersProperties = {
  removeWord: removeWord,
}
const answers = iterateComponent(Word,savedWords,answersProperties)

// const remover = (index) => {
//   setSavedWords((prev) => prev.filter((e,i) => i!==index))  
// }


  return(
    <div className="grid-container">
      <div className="menu-container">
        <Menu />
      </div>
      <div className="timer-container">
        <Timer />
      </div>
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
