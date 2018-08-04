import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
//you always need to make a new class a react's component class.
class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            number:6
        };
    }
    // hello() {
    //     console.log('use this keyword to call a member function:key concept of difference between member function and function')
    // }
    //
    // componentWillMount() {
    //     console.log('inside componentWillMount')
    //     this.hello()
    // }

    addToList = () => {
        const {number} = this.state;
        this.setState({
            number:number + 1
        });
    }

    subtractToList = () => {
        const {number} = this.state;
        this.setState({
            number:number - 1
        });
    }
  render() {
        const number = this.state;
        console.log('in render')
    return (
        <div>
            <List number={number}/>
            <button id="addbtn" onClick={this.addToList}>ADD(+)</button>
            <button id="delbtn" onClick={this.subtractToList}>DELETE(-)</button>
        </div>
    );
  }
}

export default App;
/*number and hello are a part of object called props*/
//think of <List/> as an object of List clas.
//state is immutable and on the change of state rerender() is called.
// .bind() .call() .apply()