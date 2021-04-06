import React from 'react';
import handleGameTileClick from '../functions/handleGameTileClick';

const GameTile = (props) => {
    const properties = props.properties;

    const handleEvent = (event) => {
        //console.log('value gameTile: ' + props.value)
        handleGameTileClick(props.value,properties,props.index)
    }

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