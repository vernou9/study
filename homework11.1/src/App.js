import React, { Component } from 'react';

class ColorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "Green" };
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      return true;
    }
    else {
      return false;
    }
  }
  
  changeColor = () => {
    this.setState({ color: "Blue" });
  };

  render() {
    return (
      <>
        <h1>Color is {this.state.color}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </>
    );
  }
}

export default ColorInfo;
