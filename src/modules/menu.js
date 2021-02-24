import React from 'react';
import Instructions from './instructions'

const Menu = (props) => {
    let onOff = false;
    const instructionsSwitch = () => {
        onOff ? onOff=false : onOff=true;
        return onOff;
    }

    return(
        <div className="menu-div" >
            <button className="menuButton" onClick={props.onClick}>
                |||
            </button>
            <Instructions onClick={instructionsSwitch}/> 
        </div>
        
    )
}

export default Menu;