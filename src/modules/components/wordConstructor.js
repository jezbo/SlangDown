import React from 'react';
import BabyTile from './babyTile';
import iterateComponent from '../functions/iterateComponent';

const WordConstructor = (props) => {
    const properties = props.properties;

    const constructedWord = iterateComponent(BabyTile,properties.word,properties);

    return constructedWord;
}

export default WordConstructor; 