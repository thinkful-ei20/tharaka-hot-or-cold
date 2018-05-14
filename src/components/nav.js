import React from 'react';
import './nav.css'

export default function Nav() {
    return (
        <nav className="nav">
             <a href="#what" className="what" aria-label="How to play">
              What?
            </a>
            <a
              href="#feedback"
              className="new"
              aria-label="Start a new game"
            >
              + New Game
            </a>
        </nav>
    );
}