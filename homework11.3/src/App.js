import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class Container extends React.Component {
  
  constructor(props) {
   
    super(props);
    this.state = { show: true };
    
  }

  hidechildren = () => { 
    this.setState({show: false});
  };
  
  render() {
    let childComponent = null;
    if (this.state.show) {
      childComponent = <Child />;
    }
   
    return (
      <>
        {childComponent}
        <button type="button" onClick={this.hidechildren}>
        1234
      </button>
      </>
      
    );
  }
}



class Child extends React.Component {
  componentWillUnmount() {
    alert("The component Child is unmounted.");
  }

  render() {
    return (
      <>
      <h1>Children!</h1>
      </>
    );
  }
}



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container />);
export default Container;
