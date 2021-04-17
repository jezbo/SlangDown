/*
    iterates over a given array and puts each value 
    into the given component via its value prop  
*/

import React from 'react';

const iterateComponent = (Component, array, props) => {
    const component = array.map((e,i) => {
        return (
            <Component 
                value={e}
                key={i.toString()}
                index={i}
                properties={props}
            />
        )
    })
    return component;
}

export default iterateComponent;