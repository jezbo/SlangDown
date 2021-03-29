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
  const gameTiles = ["S","L","A","N","G","D","O","W","N"];
  const starterTiles = ["S","L","A","N","G","D","O","W","N"];
  const gameOverTiles = ["G","A","M","E","O","V","E","R","!"];
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

//****************************GAME STATE FUNCTIONS**************************************
  // const gameTimer = () => {
  //   const timeoutCallback = () => {
  //     setGameState('end');
  //     clearTimeout(timer);
  //   }
  //   const timer = setTimeout(timeoutCallback, (time*1000));
  // }

  // const startGame = () => {
  //   setSavedWords([]);
  //   setScore(0);
  //   const selectedLetters = chooseLetters(9);
  //   setLetters(selectedLetters);
  //   setGameState('middle');
  //   gameTimer(time,setGameState);
  // }

  // const manageGameState = () => {
  //   if(gameState==='start') startGame(setSavedWords,setScore,setLetters,setGameState,time);
  //   else if(gameState==='middle') setGameState('end');
  //   else if (gameState==='end') startGame(); 
  // }

//*******************************SCORE FUNCTION*****************************************

// const scoreFunction = (points) => {
//   if(typeof(points)==="number") setScore(score+points)
// }
  
//**********************************ANSWER FUNCTIONS*************************************

  // const saveWord = async (word) => {
  //   const wordIsUnique = !savedWords.includes(word);
  //   if(wordIsUnique) setSavedWords((prev) => [...prev, word])
  //   const veracity = await veracityOfDefinitions(word);
  //   setWordVeracity((prev) => [...prev, veracity]);
  //   if(wordIsUnique) {
  //     veracity ? scoreFunction(word.length) : scoreFunction(-1*word.length);
  //   }
  // }

  // const removeWord = (index) => {
  //   setSavedWords((prev) => prev.filter((e,i) => index!==i));
  // }

//*************************************PROPS********************************************* 
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
  starterTiles,
  gameOverTiles,
  gameTiles,
  bigTileSwitches: gameTileSwitches,
  newWord,
  minThumbsUp,
}

//*********************************COMPONENTS********************************************

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
