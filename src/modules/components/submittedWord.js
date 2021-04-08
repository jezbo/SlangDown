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

    useEffect(() => {
        setScore(properties)
    })

    let listElementP = <li className="word pending">{props.value}</li>;
    let listElementG = <li className="word good">{props.value}</li>;
    let listElementB = <li className="word bad">{props.value}</li>;
   
    
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