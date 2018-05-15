import React from 'react';
import './guessForm.css'


export default function Form (){
    return (
        <form className="formClass" action="" method="">
            <input type="text" placeholder="Enter Your Guess"/><br></br>
            <input className="guessSubmit" type="submit" value="Guess"/>
        </form>
    )
}