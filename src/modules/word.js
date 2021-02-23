import React from 'react';

const Word = (props) => {
    return(
       <div className="word-container" >
            <p className="word" >
                {props.value}
            </p>
            <p className="exit" onClick={props.onClick} >
                x
            </p>
        </div> 
    )
    
}

export default Word;