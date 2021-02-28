import React, { useState } from 'react';

const SingleTile = (props) => {
    const [isActive, setIsActive] = useState(false);
    const handleEvent = (e) => {
       setIsActive(!isActive);
       console.log(e);
    }

    return (
        <button className={`tile ${isActive ? 'active' : 'inactive'}`}  onClick={handleEvent}>
            {props.value}
        </button> 
    )
}

export default SingleTile;