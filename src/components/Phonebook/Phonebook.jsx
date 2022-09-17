import { Component } from 'react';
import id from 'bson-objectid';
import PropTypes from 'prop-types';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const name = e.target.name;
    const number = e.target.value;
    this.setState({
      [name]: number,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = this.state.name;
    const number = this.state.number;
    const data = {
      name,
      number,
      id: id(),
    };
    this.props.addContact(data);
  };

  render() {
    return (
      <>
        <h3>Name</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h3>Number</h3>
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
export default Phonebook;

Phonebook.propTypes = {
  addContact: PropTypes.func.isRequired,
};
