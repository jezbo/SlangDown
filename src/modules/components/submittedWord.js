import React, { useEffect } from 'react';
import fetchDefinition from '../functions/fetchDefinition';
import evaluateWord from '../functions/evaluateWord';
import setScore from '../functions/setScore';
import setWordDefinition from '../functions/setWordDefinition';

const SubmittedWord = (props) => {
    //const index = props.index;
    const properties = props.properties;
    const newWord = props.value;
    const setVeracity = properties.setWordVeracity;
    const setDefinition = properties.setDefinitions;
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
    
   
    // const style = {
    //     boxShadow: veracity==='pending' ? "0.1vw 0.1vw rgb(146, 247, 113)" : "0.1vw 0.1vw rgba(255, 0, 0, 0.447)",
    // }

    return (
        <li className='word'>
            {props.value}
        </li> 
    )
    
}

export default SubmittedWord;