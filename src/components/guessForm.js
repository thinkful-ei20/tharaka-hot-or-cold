import React from 'react';
import './guessForm.css'


export default function Form (){
    return (
        <form className="form" action="" method="post">
            <input type="text" plcaeholder="Enter Your Guess"></input>
            <input type="submit" value=""></input>
        </form>
    )
}