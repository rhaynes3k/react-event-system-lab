// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {

  handleButton = () => {
    console.log('Good!')
  }

  handleButton2 = () => {
    console.log('Hey! Eyes on me!')
  }
  render(){
    return(
      <button type='button' onFocus={this.handleButton} onBlur={this.handleButton2}/>
      //<h3> Hello </h3>
    )
  }
}

export default EyesOnMe
