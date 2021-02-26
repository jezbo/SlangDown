import React from 'react';

const Word = (props) => {
    const defaultWords = ['slangdown'];
    const givenAnswers = props.value.map((e,i) => {
            return (
                <li className="word" key={i.toString()}>
                    {e}
                    <button className="exit" >
                        x
                    </button>
                </li>
            ) 
        })
   
    const defaultAnswers = defaultWords.map((e,i) => {
            return (
                <li className="word" key={i.toString()}>
                    {e}
                    <button className="exit" >
                        x
                    </button>
                </li>
            ) 
        })

    return (
        <ul className="words" >
            {props.value.length>0 ? givenAnswers : defaultAnswers}   
        </ul> 
    )
    
}

export default Word;