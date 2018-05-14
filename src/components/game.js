import React from 'react';
import Form from './guessForm';
import Value from './guessCount';
import Guess from './guess';
import './game.css'

export default function Game() {
    return (
        <div className="game">
            <span>You Won. Click new game to play again</span>
            <Form />
            <Value count={6}/>
            Guess
            <Guess />
        </div>
    )
}