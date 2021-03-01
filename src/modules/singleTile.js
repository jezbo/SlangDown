import React, { useState } from 'react';

const SingleTile = (props) => {
    const [isActive, setIsActive] = useState(false);
    const handleEvent = (e) => {
        if(!isActive) props.addLetter(e);
        setIsActive(!isActive);  
    }

    return (
        <button className={`tile ${isActive ? 'active' : 'inactive'}`} value={props.value.toLowerCase()} onClick={handleEvent}>
            {props.value}
        </button> 
    )
}

export default SingleTile;