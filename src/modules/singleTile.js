import React from 'react';

const SingleTile = (props) => {
    const handleEvent = (e) => {
        if(!props.properties.switch[props.index]) props.properties.addLetter(e, props.index);
    }

    return (
        <button 
            className={`tile ${props.properties.switch[props.index] ? 'active' : 'inactive'}`} 
            value={props.value.toLowerCase()} 
            onClick={handleEvent}
        >
            {props.value}
        </button> 
    )
}

export default SingleTile;