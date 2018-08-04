//this is another component of are add and delete app. this is a list component.

import React , {Component} from 'react';

class List extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps() {
        console.log('in componentWillReceiveProps')
    }

    //nextState is also passed in the below function

    shouldComponentUpdate(nextProps, nextState) {
        console.log('in shouldComponentUpdate')
    }

    renderList() {
        // console.log(this.props);
        let curr = 'A';
        let result = [];
        for(let i = 0 ; i<this.props.number ; i++) {
            result.push((
                <li>{curr}</li>
            ));
            curr = String.fromCharCode(curr.charCodeAt(0) + 1);
        }
        return result;
    }
    render() {
        return (
            <div>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

export default List;