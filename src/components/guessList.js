import React from 'react';
import './guessList.css'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [12, 32, 56, 72]
    };
  }

  render() {
    const guessNum = this.state.guesses.map((index, num) => {
       return  <li key={index}>{num + " "}</li>
    })
  
   
    return (
        
        <ul>{guessNum}</ul>
    )
    }
}