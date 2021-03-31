import React, { useEffect } from 'react';
import fetchDefinition from '../functions/fetchDefinition';
import evaluateWord from '../functions/evaluateWord';
import setScore from '../functions/setScore';
//import setWordDefinition from '../functions/setWordDefinition';

const SubmittedWord = (props) => {
    const index = props.index;
    const properties = props.properties;
    const newWord = props.value;
    //const veracity = properties.veracity;
    const setVeracity = properties.setWordVeracity;
    //const setDefinition = properties.setDefinitions;
    const scoreFunction = properties.setScore;
 
    useEffect( () => {
        console.log(newWord);
        const verifyWord = async() => {
            const data = await fetchDefinition(newWord)
            console.log('submittedWord, data: ' + data);
            const veracity = evaluateWord(data);
            console.log('SUbmittedWord, veracity: ' + veracity.veracious);
            setVeracity((prev) => [...prev, veracity.veracious]);
            //setWordDefinition(data,setDefinition,veracity);
            setScore(newWord.length,veracity.veracious,scoreFunction);
            
        }
        verifyWord()
    }, [])

    let listElementP = <li className="word pending">{props.value + ' p'}</li>;
    let listElementG = <li className="word good">{props.value + ' g'}</li>;
    let listElementB = <li className="word bad">{props.value + ' b'}</li>;
   
    
   
       const chooseElement = !properties.wordVeracity[index] ?
            listElementP
            :
            (
                properties.wordVeracity[index]==='good' ? 
                listElementG
                :
                listElementB
            )
   
    

    return (
        chooseElement
    )
    
}

export default SubmittedWord;