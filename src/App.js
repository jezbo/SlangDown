import React, { useState } from 'react';
import Word from './modules/word';
import Menu from './modules/menu';
import Timer from './modules/timer';
import Tiles from './modules/tiles';

const App = () => {
  const [savedWords, setSavedWords] = useState([]);
  const saveWord=(word)=>{
    setSavedWords((prev) => [...prev, word])
}


  return(
    <div className="grid-container">
      <div className="menu-container">
        <Menu />
      </div>
      <div className="timer-container">
        <Timer />
      </div>
      <div className="word-container">
        <Word 
          value={savedWords} />
      </div>
      <div className="tiles-container">
        <Tiles  
          saveWord={saveWord}
        />
      </div>
    </div>
  )
}

export default App;
