import React from 'react';
import Nav from './nav';
import './header.css';

export default function Header(props) {
    return (
        <div className="header">
            <Nav />
            <h1>HOT or COLD</h1>
        </div>
    )
}