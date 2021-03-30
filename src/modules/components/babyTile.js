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
                <p className='delete' >
                    {properties.gameState==='end' ? '' : 'x'}
                </p>
            </button>
       
    )
}

export default BabyTile;