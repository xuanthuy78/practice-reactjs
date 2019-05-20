import React, { Component} from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import success from '../images/success.svg';
import success1 from '../images/success1.svg';

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = success;
    if(item.isComplete) {
      url = success1;
    }
    return (
      <div  className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        <img onClick={onClick} src = {url} width={32} height={32}/>
        <p>{ this.props.item.title }</p>
      </div>
    ); 
  }
}

export default TodoItem;
