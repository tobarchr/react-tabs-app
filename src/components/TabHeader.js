import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';

const TabHeader = (props) =>{
    const selectedStyle = {
        backgroundColor: "seagreen",
        width: 200,
        display: "inline-block",
    }
    const notSelectedStyle = {
        backgroundColor: "grey",
        width: 200,
        display: "inline-block"
    }
    return(
        <div style={props.selected ? selectedStyle : notSelectedStyle} onClick={() => props.handleClick(props.index)}>
            Tab {props.index}
        </div>
    )
}

export default TabHeader;