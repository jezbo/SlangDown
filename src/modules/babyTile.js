import React from 'react';

const BabyTile = (props) => {
    const clickHandle = (event) => {
        props.removeLetter(event, props.index, props.originIndex)
    }

    return (
        <button 
            className="babyTile" 
            onClick={clickHandle}
        >
            {props.value}
        </button>
    )
}

export default BabyTile;