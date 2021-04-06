import React from 'react';
import handleButtonClick from '../functions/handleButtonClick';

const Button = (props) => {
    const properties = props.properties;

    const onClick = (event) => handleButtonClick(event, properties);

    return(
        <div className="button-container">
            <button 
                className={`button ${properties.gameState}`} 
                onClick={onClick}
            >
                    {properties.gameState==='start' ? 
                        'GO' 
                        : 
                        (properties.gameState==='middle' ? 
                            'ENTER' 
                            : 
                            'AGAIN!'
                        )
                    }
            </button>
        </div>
    )
}

export default Button;