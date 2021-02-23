import React from 'react';

const Button = (props) => {

    return(
        <div className="buttonContainer">
            <button className="button" onClick={props.onClick}>
                <p>
                    {props.value}
                </p>
            </button>
        </div>
    )
}

export default Button;