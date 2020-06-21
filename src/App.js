import React, { Component } from 'react';
import data from './Components/data.js';
import DisplayText from './Components/DisplayText';
import CycleData from './Components/CycleData';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      info: data.data,
      currentIndex: 0
    }
  }

  previous = () => {
    // console.log('this is working')
    let previousIndex = --this.state.currentIndex;
    console.log(previousIndex);
    if (this.state.currentIndex === -1) {
      this.setState({currentIndex: this.state.info.length - 1})
    }
    else {
      this.setState({currentIndex: previousIndex});
    }
    // console.log(this.state.currentIndex);
  }

  next = () => {
    // console.log('this is working');
    let nextIndex = ++this.state.currentIndex;
    console.log(nextIndex);
    if (this.state.currentIndex === this.state.info.length) {
      this.setState({currentIndex: 0})
    }
    else {
      this.setState({currentIndex: nextIndex});
    }
    // console.log(this.state.currentIndex);
  }

  deleteUser = () => {
    let users = this.state.info;
    // console.log(users[this.state.currentIndex]);
    users.splice(this.state.currentIndex, 1);
    // console.log(users.length);
    this.setState({info: users});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Home</h1>
        </header>
        <section className='main-section'>
          <div className='display-info'>
            <DisplayText userInfo={this.state.info} currentUser={this.state.currentIndex}/>
          </div>
          <CycleData nextUser={this.next} previousUser={this.previous} delete={this.deleteUser}/>
        </section>
      </div>
    );
  }
}

export default App;
