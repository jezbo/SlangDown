import React from 'react';

const Word = (props) => {
    const handleClick = (event) => {
        props.properties.removeWord(props.index);
    }

    return (
        <li className="word">
            {props.value}
            <button 
                className="exit"  
                onClick={handleClick}
            >
                x
            </button>
        </li> 
    )
    
}

export default Word;