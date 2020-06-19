import React, { Component } from 'react';
import data from './data.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      info: data.data
    }
  }

  render() {
    // console.log(this.state.info[1].name);
    return (
      <div className="App">
        <header>
          <h1>Home</h1>
        </header>
        <section className='main-section'>
          <div className='display-info'>
            <p>Some Text</p>
          </div>
          <div className='display-btn'>
            <button> {'<'} Previous</button>
            <button>Next {'>'}</button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
