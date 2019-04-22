import React, { Component } from 'react';
class Cell extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      color: props.value
    }
  }

  changeColor = () => {
    const newColor = "#333";
    this.setState({
      color: newColor
    })
  }

  render(){
    return (
      <div  style={{backgroundColor: this.state.color}} className = "cell" onClick={this.changeColor}>
      </div>
    )
  }
}

export default Cell;
