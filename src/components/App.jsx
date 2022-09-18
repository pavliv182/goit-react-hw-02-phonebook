import { Component } from 'react';
import { Notify } from 'notiflix';
import Section from './Section';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    if (this.state.contacts.find(el => el.name === data.name)) {
      Notify.failure('This contact is already in phonebook');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));

    Notify.success('Contact added succesfully!');
  };

  addFilter = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  filterContacts = () => {
    if (this.state.filter) {
      const filteredContacts = this.state.contacts.filter(el =>
        el.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
      return filteredContacts;
    }

    return this.state.contacts;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(el => el.id !== id)],
    }));
  };

  render() {
    const { addContact, addFilter, filterContacts, deleteContact } = this;
    return (
      <>
        <Section title="Phonebook">
          <Phonebook addContact={addContact} />
        </Section>
        <Section title="Contacts">
          <Filter addFilter={addFilter} value={this.state.filter} />
          <Contacts data={filterContacts()} deleteContact={deleteContact} />
        </Section>
      </>
    );
  }
}
