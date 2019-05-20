import React, { Component} from 'react';
import classNames from 'classnames';
import './Exam.css';

class Exam extends Component {
  render() {
    const { animal } = this.props;
    return (
      <div className={classNames({'Exam-complete' : animal.isComplete})}>
        <p>{animal.title}</p>
      </div>
    ); 
  }
}

export default Exam;
