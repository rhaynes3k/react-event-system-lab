// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  handleClick = (e) => {
    console.log('Entering password...')
  }
  render(){
    return(
      <input type='password' onKeyUp={this.handleClick}/>
    )
  }
}

export default Keypad
