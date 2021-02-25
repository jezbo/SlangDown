import React from 'react';
import Button from './modules/button';
import Word from './modules/word';
import Menu from './modules/menu';
import Timer from './modules/timer';
import LetterTiles from './modules/letterTiles';



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
