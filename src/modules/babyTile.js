import React, { useState } from 'react';

const BabyTile = (props) => {
    const [isActive, setIsActive] = useState(true);
    const [tileValue, setTitleValue] = useState(null);
    const handleEvent = (e) => {

    }
    
    return (
        <p className={`babyTile ${isActive ? "active" : "inactive"}`}>
            {props.value}
        </p>
    )
}

export default BabyTile;