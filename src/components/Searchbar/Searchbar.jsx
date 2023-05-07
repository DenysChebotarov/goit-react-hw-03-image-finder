import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    name: '',
  };
  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      alert('Введіть імя');
      return;
    }
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };
  render() {
    return (
      <header class="searchbar">
        <form onSubmit={this.handleSubmit} class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
