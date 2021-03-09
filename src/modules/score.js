import React from 'react';

const Score = (props) => {
    return(
         <div className="score">
            <p>{props.value}</p>
        </div>
    )
    
}

export default Score;