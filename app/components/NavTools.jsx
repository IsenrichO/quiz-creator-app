import React, { Component } from 'react';
import $ from 'jquery';

// import CheckAnswer from './CheckAnswer.jsx';


export default class NavTools extends Component {
  constructor() {
    super();
    this.addNewQuestion = this.addNewQuestion.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.saveQuiz = this.saveQuiz.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.renderQuestionsList = this.renderQuestionsList.bind(this);
    this.state = { questionNum: 0 && Number(Object.keys(localStorage).pop().replace(/\D/gmi, '')) + 1 }
  }

  // Add new question/answer pair:
  addNewQuestion(evt) {
    evt.preventDefault();
    let [question, answer] = [prompt('Your question:'), prompt('The answer:')];
    localStorage.setItem(`Q${++this.state.questionNum}`, question);
    localStorage.setItem(`A${this.state.questionNum}`, answer);
      console.log('State:', this.state);
  }

  // Clear `localStorage` cache:
  deleteAll(evt) {
    evt.preventDefault();
    localStorage.clear();
  }

  // Mock Promise-based save implementation:
  saveQuiz(evt) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          // Pretend the save operation failed:
          return reject(new Error('Error: Quiz randomly failed to save'));
        }
        // Pretend the save operation succeeded:
        let serializedQuiz = $('#quiz').serialize();
          console.log('Serial:', serializedQuiz);
        localStorage.setItem('quiz', serializedQuiz);
        return resolve();
      }, Math.random() * 1000);
    });
  }

  checkAnswer(evt) {
    evt.preventDefault();
    alert(this.props.response === this.props.answer ? 'CORRECT!' : 'Not quite. Try again.');
  }

  renderQuestionsList() {
    let arr = [];
    for (let key in localStorage) {
      if (/q/i.test(key)) { arr.push([key, localStorage[key]]); }
    }
      console.log('Questions:', arr);

    return arr.map((question, index, list) =>
      <div
        key={ `QuestionNum_${index}` }
        className="question-container">
        <h4>{ question[0] }</h4>
        <label>{ question[1] }</label>
        <input
          type="text"
          className="quiz-question" />
        <input
          type="text"
          defaultValue={ question[2] } />
        <button
          onClick={ this.checkAnswer }>
          Check
        </button>
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
        <button
          id="save-quiz-btn"
          onClick={ this.saveQuiz }>
          Save
        </button>
        <form id="quiz">{ this.renderQuestionsList() }</form>
      </div>
    );
  }
};
