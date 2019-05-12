import React, { Component } from 'react'
import './app.css'
import Header from './Header';


export default class Main extends Component {

  render() {
    return (
      <div className="App">
        <Header {...this.props}/>
      </div>
    );
  }
}

