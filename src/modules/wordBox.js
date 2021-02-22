import React from 'react';
import Word from './word';

const WordBox = (props) => {
    <div className="wordBox-container">
        {props.words.forEach(word => {return <Word value={word} />})}
    </div>
}

export default WordBox;