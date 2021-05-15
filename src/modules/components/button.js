/*
    the button that will START the game
    allow the user to SUBMIT a selected 
    word and RESTART the game
*/
import React from 'react';
import handleButtonClick from '../functions/handleButtonClick';

const Button = (props) => {

    //Simplify access to state/global variable library
    const properties = props.properties;

    //Click Starts, Submits or Restarts dependent on game State
    //('start', 'middle', 'end' respectively)
    const onClick = (event) => handleButtonClick(event, properties);

    //********************************JSX***********************************
    return(
        <div className="button-container">
            <button 
                className={`button ${properties.gameState}`} 
                onClick={onClick}
            >
                GO
            </button>
        </div>
    )
}

export default Button;