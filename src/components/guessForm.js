import React from 'react';
import './guessForm.css'


export default function Form (){
    return (
        <form className="formClass" action="" method="post">
            <input type="text" placeholder="Enter Your Guess"/>
            <input type="submit" value=""/>
        </form>
    )
}