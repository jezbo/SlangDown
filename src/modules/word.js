import React from 'react';

const Word = (props) => {
    const veracity = props.properties.veracity[props.index];
    const style = {
        backgroundColor : veracity===true ?  "#d6fec2" : "#fcacac",
        color: veracity ? "#fffed1" : "#fffed1",
    }

   /* const handleClick = (event) => {
        props.properties.removeWord(props.index);
    }
    */

    return (
        <li className='word' style={style}>
            {props.value}
        </li> 
    )
    
}

export default Word;