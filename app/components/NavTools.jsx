import React, { Component } from 'react';


export default class NavTools extends Component {
  constructor() {
    super();
    this.addNewQuestion = this.addNewQuestion.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.renderQuestionsList = this.renderQuestionsList.bind(this);
    this.state = { questionNum: 0 && Number(Object.keys(localStorage).pop().replace(/\D/gmi, "")) + 1  }
  }

  addNewQuestion(evt) {
    evt.preventDefault();
    let question = prompt('Your question:');
    localStorage.setItem(`Q${++this.state.questionNum}`, question);
    console.log('State:', this.state);
  }

  deleteAll(evt) {
    evt.preventDefault();
    localStorage.clear();
  }

  renderQuestionsList() {
    let arr = [];
    for (let key in localStorage) {
      arr.push([key, localStorage[key]]);
    }
      console.log('Questions:', arr);

    return arr.map((question, index, list) =>
      <div
        key={ `QuestionNum_${index}` }
        className="question-container">
        <h4>{ question[0] }</h4>
        <label>{ question[1] }</label>
        <input
          type="text" />
      </div>
    );
  }

  render() {
    return (
      <div className="nav-tools">
        <button
          id="new-question-btn"
          onClick={ this.addNewQuestion }>
          Add Question
        </button>
        <button
          id="delete-all-btn"
          onClick={ this.deleteAll }>
          Delete All
        </button>
        <div>{ this.renderQuestionsList() }</div>
      </div>
    );
  }

};
