import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
//you always need to make a new class a react's component class.
class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            number:0,
            listEnabled: true
        };
    }


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

    toggleList = () => {
        const {listEnabled} = this.state;
        this.setState({
            listEnabled:!listEnabled
        });
    }
  render() {
        const {number,listEnabled} = this.state;
        console.log('in render')
    return (
        <div>
            {listEnabled && <List number={number}/>}
            <button id="addbtn" onClick={this.addToList}>ADD(+)</button>
            <button id="delbtn" onClick={this.subtractToList}>DELETE(-)</button>
            <button id="togglebtn" onClick={this.toggleList}>TOGGLE LIST</button>
        </div>
    );
  }
}

export default App;
