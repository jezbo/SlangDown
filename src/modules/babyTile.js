import React from 'react';

const BabyTile = (props) => {
    const clickHandle = (event) => {
        const originIndex = props.properties.originIndexes[props.index]
        props.properties.removeLetter(event, props.index, originIndex);
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