import React, { Component } from 'react';


export default class NavTools extends Component {
  constructor() {
    super();
    this.deleteAll = this.deleteAll.bind(this);
  }

  deleteAll(evt) {
    evt.preventDefault();
    localStorage.clear();
  }

  render() {
    return (
      <div className="nav-tools">
        <button
          id="new-list-btn">
          New List
        </button>
        <button
          id="delete-all-btn"
          onClick={ this.deleteAll }>
          Delete All
        </button>
      </div>
    );
  }

};
