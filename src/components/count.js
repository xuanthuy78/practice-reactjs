import React, { Component} from 'react';
import classNames from 'classnames';


class Count extends Component {
  constructor() {
    super();
    this.state = {
      count : 0
    }
  }

  increase() {
    this.setState(state => {
      return {
        count: state.count + 2
      }
    })

    // this.setState({
    //   count: this.state.count + 2
    // })
  } 
  render() {
    return (
      <div className="Count">
        <h1>{this.state.count}</h1>
        <button onClick={this.increase.bind(this)}>Add</button>
      </div>
    ); 
  }
}

export default Count;
