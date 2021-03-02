import React from 'react';

const SingleTile = (props) => {
    const handleEvent = (e) => {
        if(!props.switch) props.addLetter(e, props.index);
    }

    return (
        <button 
            className={`tile ${props.switch ? 'active' : 'inactive'}`} 
            value={props.value.toLowerCase()} 
            onClick={handleEvent}
        >
            {props.value}
        </button> 
    )
}

export default SingleTile;