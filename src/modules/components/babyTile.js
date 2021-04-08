import React from 'react';
import handleBabyTileClick from '../functions/handleBabyTileClick';

const BabyTile = (props) => {
    const properties = props.properties

    const handleClick = (event) => handleBabyTileClick(event,properties,props.index);


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