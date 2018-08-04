import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//you always need to make a new class a react's component class.
class App extends Component {

    hello() {
        console.log('use this keyword to call a member function:key concept of difference between member function and function')
    }

    componentWillMount() {
        console.log('inside componentWillMount')
        this.hello()
    }
  render() {
        console.log('in render')
    return (
        <ul>
            <li>Person 1</li>
            <li>Person 2</li>
            <li>Person 3</li>
            <li>Person 4</li>
        </ul>
    );
  }
}

export default App;
