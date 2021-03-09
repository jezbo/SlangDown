import React from 'react';

const Word = (props) => {
    const veracity = props.properties.veracity[props.index];

    const style = {
        boxShadow: veracity ? "0.1vw 0.1vw rgb(146, 247, 113)" : "0.1vw 0.1vw rgba(255, 0, 0, 0.447)",
    }

    return (
        <li className='word' style={style}>
            {props.value}
        </li> 
    )
    
}

export default Word;