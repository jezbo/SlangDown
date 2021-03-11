import React, { useState } from 'react';
import Word from './modules/word';
import iterateComponent from './modules/iterateComponent';
import veracityOfDefinitions from'./modules/wordVeracity';
import chooseLetters from './modules/chooseLetters';
import StartPage from './modules/startPage';
import GamePage from './modules/gamePage';
import EndPage from './modules/endPage';

const App = () => {

//*********************************STATE DECLARATIONS***********************************
  const [gameState, setGameState] = useState('start');
  const [letters,setLetters] = useState(null);
  const [score, setScore] = useState(0);
  const [savedWords, setSavedWords] = useState([]);
  const [wordVeracity,setWordVeracity] = useState([]);
  const [time, setTime] = useState(90)

//****************************GAME STATE FUNCTIONS**************************************
  const gameTimer = () => {
    const timeoutCallback = () => {
      setGameState('end');
      clearTimeout(timer);
    }
    const timer = setTimeout(timeoutCallback, (time*1000));
  }
  const startGame = () => {
    const selectedLetters = chooseLetters(9);
    setLetters(selectedLetters);
    setGameState('middle');
    gameTimer();
  }

  const manageGameState = () => {
    if(gameState==='start') startGame();
    else if(gameState==='middle') setGameState('end');
    else if (gameState==='end') startGame(); 
  }

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
    if(wordIsUnique) {
      veracity ? scoreFunction(word.length) : scoreFunction(-1*word.length);
    }
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

//*************************************PROPS********************************************* 
const properties = {
  score: score,
  time: time,
  answers: answers,
  gameState: gameState,
  saveWord: saveWord,
  manageGameState: manageGameState,
  letters: letters,
}

//*********************************COMPONENTS********************************************

const game = gameState==='start' ?
  <StartPage properties={properties}/> : 
  (gameState==='middle' ? 
    <GamePage properties={properties} /> : 
    <EndPage properties={properties} />); 

return game
}

export default App;
