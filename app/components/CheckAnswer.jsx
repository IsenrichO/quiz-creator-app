import React, { Component } from 'react';


export default class CheckAnswer extends Component {
  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(evt) {
    evt.preventDefault();
    alert(this.props.response === this.props.answer ? 'CORRECT!' : 'Not quite. Try again.');
  }

  render() {
    return (
      { this.checkAnswer }
    )
  }
};
