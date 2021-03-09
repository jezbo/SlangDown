import React from 'react';

const Word = (props) => {
    const veracity = props.properties.veracity[props.index];

    const style = {
        backgroundColor : veracity ?  "#d6fec2" : "#fcacac",
        color: veracity ? "#fffed1" : "#fffed1",
    }

    return (
        <li className='word' style={style}>
            {props.value}
        </li> 
    )
    
}

export default Word;