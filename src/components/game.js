import React from 'react';
import Form from './guessForm';
import Value from './guessCount';
import Guess from './guess';
import './game.css'

export default function Game() {
    return (
        <div className="game">
            <div className="resultMessage">
                <span>You Won. Click new game to play again</span>
            </div>

            <Form />
            <Value count={6}/>
            <Guess />
        </div>
    )
}