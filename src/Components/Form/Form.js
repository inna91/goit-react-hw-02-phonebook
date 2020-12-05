import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  // contactId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const contact = { id: shortid.generate(), name, number };
    this.props.onSubmit(contact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor={this.nameInputId}>
          Name
          <input
            className={s.input}
            type="text"
            value={name}
            name={'name'}
            onChange={this.handleChange}
            id={this.nameInputId}
            placeholder="Enter contact name"
            required
          />
        </label>
        <label className={s.label} htmlFor={this.numberInputId}>
          Number
          <input
            className={s.input}
            type="tel"
            name={'number'}
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
            placeholder="Enter contact number"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Add the new contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
