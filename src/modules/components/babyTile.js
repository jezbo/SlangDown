/*
    Creates the smaller letter tiles that appear as the game tiles are selected, 
    so these spell the desired word
*/
import React from 'react';
import handleBabyTileClick from '../functions/handleBabyTileClick';

const BabyTile = (props) => {
    const properties = props.properties
    /*
        when clicked the babyTile is removed and the corresponding gameTile 
        is unselected and available to select again
    */
    const handleClick = (event) => handleBabyTileClick(event,properties,props.index);

    //*************************************JSX*********************************
    return (
        <div>
             <button 
                className="babyTile" 
                onClick={handleClick}
            >
                {props.value}
            </button>
            {/*<p className='delete' >
                {properties.gameState==='end' ? '' : 'x'}
            </p>*/}
        </div>
           
       
    )
}

export default BabyTile;