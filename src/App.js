import React from 'react';
import Button from './modules/button';
import Word from './modules/word';
import Timer from './modules/timer';
import LetterTiles from './modules/letterTiles'


const App = () => {
  return(
    <div className="grid-container">
      <div className="instructions-container">
        <h2 className="instructions-title">...</h2>
        <h3 className="instructions">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h3>
      </div>
      <div className="timer-container">
        <Timer />
      </div>
      <div className="word-container">
        <Word value={"spudsicles"} />
      </div>
      <div className="tiles-container">
        <LetterTiles />
      </div>
      
    </div>
  )
}




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
