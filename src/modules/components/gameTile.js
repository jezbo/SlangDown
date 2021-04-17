/*
    Like a single scrabble tile, a tile with a letter on it
    interactive, visual feedback when clicked (in CSS) and 
    styling also changes dependent on active/inactive state
    so each letter can only be selected once per word
    though can be deleted and made available again. 
*/

// Module imports
import React from 'react';
import handleGameTileClick from '../functions/handleGameTileClick';

// Functional component
const GameTile = (props) => {
     
    // Simplify access to State/Global Variable library
    const properties = props.properties;

    // Manage tile click - set gameTile state
    // & add letter to wordConstructor component
    // whilst indexing order of letter selection
    const handleEvent = (event) => {
        handleGameTileClick(props.value,properties,props.index)
    }

    //**************************************JSX*******************************
    return (
        <button 
            className={`tile ${properties.gameTileState[props.index] ? 'active' : 'inactive'}`}
            onClick={handleEvent}
        >
            {props.value}
        </button> 
    )
}

export default GameTile;