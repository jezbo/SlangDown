import React, { useState } from 'react';
import StartPage from './modules/components/startPage';
import GamePage from './modules/components/gamePage';
import EndPage from './modules/components/endPage';

const App = () => {

//**********************************GLOBAL VARIABLES************************************
  const gameTileSwitches = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  }
  const minThumbsUp = 700;
  const newWord = [];
  const gameTiles = [...'SLANGDOWN'];
  const gameOverTiles = [...'GAMEOVER'];
  const endingBabyTiles = [...'PlayAgain?'] 
//*********************************STATE DECLARATIONS***********************************
  const [gameTileState, setGameTileState] = useState(gameTileSwitches);
  const [word, setWord] = useState(newWord);
  const [wordData, setWordData] = useState([]);
  const [originIndex, setOriginIndex] = useState([]);
  const [gameState, setGameState] = useState('start');
  const [letters,setLetters] = useState(null);
  const [score, setScore] = useState(0);
  const [savedWords, setSavedWords] = useState([]);
  const [wordVeracity,setWordVeracity] = useState([]);
  const [time, setTime] = useState(90);
  const [definitions, setDefinitions] = useState([]);

//*************************************PROPS LIBRARY********************************************* 
// This creates a library of all 
// States & Global Variables available 
// via props throughout the whole app    
const properties = {
    //***********STATE**************
    gameTileState,
    word,
    wordData,
    originIndex,
    gameState,
    letters,
    score,
    savedWords,
    time,
    wordVeracity,
    definitions,
    //*********SET STATE************
    setGameTileState,
    setWord,
    setWordData,
    setOriginIndex,
    setGameState,
    setLetters,
    setScore,
    setSavedWords,
    setTime,
    setWordVeracity,
    setDefinitions,
    //*********VARIABLES************
    endingBabyTiles,
    gameOverTiles,
    gameTiles,
    bigTileSwitches: gameTileSwitches,
    newWord,
    minThumbsUp,
  }
  
  //*********************************JSX********************************************

  const game = gameState==='start' ?
    <StartPage properties={properties}/> 
    : 
    (gameState==='middle' ? 
      <GamePage properties={properties} /> 
      : 
      <EndPage properties={properties} />); 

  return game;
}

export default App;
