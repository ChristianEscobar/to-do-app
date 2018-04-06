import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Container from "./components/Container";
import Navigation from "./components/Navigation";

class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <br />
        <Container />
      </div>
    );
  }
}

export default App;
