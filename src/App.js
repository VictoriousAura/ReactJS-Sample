import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = {
    counters : [
      { id :1 , value :4},
      { id :2 , value :0},
      { id :3 , value :0},
      { id :4 , value :0}

    ]
  };

  handleDelete = counterId => {
    const counters= this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});


  };

  handleReset= ()=> {
    const counter =this.state.counters.map(c => {
      c.value = 0;

      return c ;
    })
    this.setState({counter});
  };

  handleIncrement = counter=> {
    const counters = [...this.state.counters]; //clones the same array
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
  }

  render () {
    return (
        <React.Fragment>
          <Navbar totalCounters={ this.state.counters.filter(c=> c.value > 0).length}/>
        <main className = " container">
        <Counters
            counters = {this.state.counters}
            onReset={ this.handleReset}
            onDelete = {this.handleDelete}
            onIncrement = {this.handleIncrement}/>
        </main>
        </React.Fragment>
    );
  }
}

export default App;
