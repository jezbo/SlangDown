/*
    Called by gamePage.js
    This displays a single word submitted by the user
    It sets the wordVeracity state (whether it is in urbanDictionary
    as found by fetchDefinition.js, and if it meets minimum upvote 
    requirements as set out in evaluateWord.js)
    It visually feedsback the state of the word's veracity.  
    The array of submitted words is iterated over to create many of 
    these componenets in a list.
*/

// imports
import React, { useEffect } from 'react';
import fetchDefinition from '../functions/fetchDefinition';
import evaluateWord from '../functions/evaluateWord';
import setScore from '../functions/setScore';
//import setWordDefinition from '../functions/setWordDefinition';

const SubmittedWord = (props) => {
    const index = props.index;
    const properties = props.properties;
    const newWord = props.value;
    const setVeracity = properties.setWordVeracity;
    //const setDefinition = properties.setDefinitions;
 
    // Fetch word data from API and pass to setScore
    // evaluateWord to find and set veracity
    useEffect(() => {
        console.log(newWord);
        const verifyWord = async() => {
            const data = await fetchDefinition(newWord)
            console.log('submittedWord, data: ' + data);

            const veracity = evaluateWord(data);
            console.log('SUbmittedWord, veracity: ' + veracity.veracious);

            setVeracity((prev) => [...prev, veracity.veracious]);
            //setWordDefinition(data,setDefinition,veracity);  
        }
        verifyWord()
    }, [])

    // on mount of component run setScore with updated states 
    useEffect(() => {
        setScore(properties)
    })

    let listElement = 
        <li className={
            `word 
            ${!properties.wordVeracity[index] ?
                'pending'
                :
                (
                    properties.wordVeracity[index]==='good' ? 
                        'good'
                        :
                        'bad'
                )}`
            }
        > 
                {props.value}
            </li>
    

    return (
        listElement
    )
    
}

export default SubmittedWord;