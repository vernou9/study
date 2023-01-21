import './App.css';
import React, { Component } from 'react';



class ColorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "Green" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({color: "Yellow"});
    },1000);
  }

  render() {
    return <h1>Color is {this.state.color} </h1>;
  }
}



export default ColorInfo;
