import React from 'react';
import './guessCount.css'

export default function Value (props){

    return (
        <div className="numDef">Guess #<p className="numVal">{props.count}</p>!</div>
    )

}