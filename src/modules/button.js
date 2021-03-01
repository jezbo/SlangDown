import React from 'react';

const Button = (props) => {
    const onClick = (e) => {
        return
    }
    return(
        <div className="buttonContainer">
            <button className="button" onClick={onClick}>
                    {props.value}
            </button>
        </div>
    )
}

export default Button;