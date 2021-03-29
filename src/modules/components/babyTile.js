import React from 'react';
import handleBabyTileClick from '../functions/handleBabyTileClick';

const BabyTile = (props) => {
    const properties = props.properties

    const handleClick = (event) => handleBabyTileClick(event,properties,props.index);


    return (
        <button 
            className="babyTile" 
            onClick={handleClick}
        >
            {props.value}
        </button>
    )
}

export default BabyTile;