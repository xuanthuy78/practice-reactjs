import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import TrafficLight from './components/TrafficLight';
import tick from './images/tick.svg';
import Exam from './components/Exam';
import Count from './components/count';
import Count2 from './components/count2';

class App extends Component {
  constructor () {
    super();
    this.exam = [
      { title: 'Dog', isComplete: true }, 
      { title: 'Cat', isComplete: false }
    ];
    this.state = {
      newItem : '',
      todoItems : [
        { title: 'Học javascript', isComplete: true},
        { title: 'Hoc reactjs', isComplete: true},
        { title: 'Angular', isComplete: false}
      ]
    } 
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onItemClick (item) {
    return (event) => {
      console.log('dfasdfa', event);
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = this.state.todoItems.indexOf(item);
      console.log('fadfa',index);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
      console.log('fadfa',todoItems);
    }
  }

  onKeyUp(event) {
    console.log('dsf',event.keyCode);
    if(event.keyCode ===13) {
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if(!text) { return;}

      this.setState({
        newItem : '',
        todoItems: [
          { title: text , isComplete: false},
          ...this.state.todoItems,
        ]
      })
    }
  }

  onChange(event) {
    this.setState ( {
      newItem: event.target.value
    })
  }
  render () {
    const {todoItems, newItem} = this.state
    return (
      <div className="App">
        <div className = "Header">
          <img src={tick} width= {32} height={32} />
          <input type = "text" 
            placeholder="Enter" 
            value = {newItem}
            onKeyUp = {this.onKeyUp} 
            onChange = {this.onChange}
            />
        </div>
          { todoItems.map((item, index) => 
            <TodoItem 
              key={index}  
              item={item}
              // value = {}
              onClick = {this.onItemClick(item)}/>)
          }

          {
            todoItems.length > 0 && todoItems.map((item, index) => <TodoItem key={index}  item={item} />)
          }
          {
            todoItems.length === 0 && "Nothing here"
          }

          <TrafficLight />
          {/*render a list*/}
          {
            this.exam.map((list, index) => <Exam animal={list} key={index} />)
          }

          <Count />
          <Count2 />
      </div>
    );
  }
}

export default App;
