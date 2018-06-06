import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import swahili from './data/kiswahili.json'
import Kiswahili from './components/Kiswahili';


class App extends Component {
  render() {
    // console.log(swahili.chapters)


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is the Root component</h1>
        </header>
       
       <Kiswahili kiswahilichapters={swahili.chapters}/>
      </div>
    );
  }
}

export default App;
