import React from 'react';
import Button from './modules/button';
import Word from './modules/word';
import Menu from './modules/menu';
import Timer from './modules/timer';
import Tiles from './modules/Tiles';



const App = () => {
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
          value={[]} />
      </div>
      <div className="tiles-container">
        <Tiles />
      </div>
      <div className="wordCreator-container">

      </div>
      <div className="button-container"></div>
        <Button value="Enter" />
    </div>
  )
}

export default App;
