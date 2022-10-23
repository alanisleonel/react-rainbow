//ColorBlock is a component

import React from 'react';

function ColorBlock(props) {
    return (
        <div className="colorBlock" style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

// Exporting ColorBlock (component)
export default ColorBlock