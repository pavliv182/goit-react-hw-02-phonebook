import { Component } from 'react';
import { Notify } from 'notiflix';
import Section from './Section';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
    return (
      <>
        <Section title="Phonebook">
          <Phonebook addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter addFilter={this.addFilter} />
          <Contacts
            data={this.filterContacts()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
