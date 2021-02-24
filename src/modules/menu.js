import React from 'react';
import Instructions from './instructions'

const Menu = (props) => {
    let onOff = false;
    const instructionsSwitch = () => {
        onOff ? onOff=false : onOff=true;
        return onOff;
    }

    return(
        <button onClick={props.onClick}>
            <p className="menuButton">|||</p>
            <Instructions onClick={instructionsSwitch}/> 
        </button>
    )
}

export default Menu;