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
    console.log('this is working')
    let previousIndex = --this.state.currentIndex;
    console.log(previousIndex);
    if (this.state.currentIndex === -1) {
      this.setState({currentIndex: 24})
    }
    else {
      this.setState({currentIndex: previousIndex});
    }
    console.log(this.state.currentIndex);
  }

  next = () => {
    console.log('this is working');
    let nextIndex = ++this.state.currentIndex;
    console.log(nextIndex);
    if (this.state.currentIndex === 25) {
      this.setState({currentIndex: 0})
    }
    else {
      this.setState({currentIndex: nextIndex});
    }
    console.log(this.state.currentIndex);
  }

  render() {
    // let display = this.state.info[this.state.currentIndex].map((element, index) => {
    //   return <DisplayText key={index} userInfo={element} />
    // })
    // console.log(this.state.info[1].name);
    return (
      <div className="App">
        <header>
          <h1>Home</h1>
        </header>
        <section className='main-section'>
          <div className='display-info'>
            <DisplayText userInfo={this.state.info[this.state.currentIndex]}/>
          </div>
          <CycleData nextUser={this.next} previousUser={this.previous}/>
        </section>
      </div>
    );
  }
}

export default App;
