import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
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
        <div>
            <List number={6}/>
            <button id="addbtn">ADD(+)</button>
            <button id="delbtn">DELETE(-)</button>
        </div>
    );
  }
}

export default App;
/*number and hello are a part of object called props*/
//think of <List/> as an object of List clas.