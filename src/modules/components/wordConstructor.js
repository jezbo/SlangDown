import React from 'react';
import BabyTile from './babyTile';
import iterateComponent from '../functions/iterateComponent';

const WordConstructor = (props) => {
    const properties = props.properties;
    const input = properties.gameState==='end' ? properties.endingBabyTiles : properties.word;

    const constructedWord = iterateComponent(BabyTile,input,properties);

    return constructedWord;
}

export default WordConstructor; 