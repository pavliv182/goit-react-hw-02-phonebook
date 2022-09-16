import { Component } from 'react';
import { Notify } from 'notiflix';
import Section from './Section';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    // filter: '',
  };

  addContact = data => {
    if (this.state.contacts.find(el => el.name === data.name)) {
      Notify.failure('This contact already in phonebook');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));

    Notify.success('Contact add succesfully!');
  };

  // addFilter = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // filterContacts = () => {
  //   if (this.state.filter) {
  //     const filteredContacts = this.state.contacts.filter(el =>
  //       el.name.toLowerCase().includes(this.state.filter.toLowerCase())
  //     );
  //     return filteredContacts;
  //   }

  //   return this.state.contacts;
  // };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Phonebook addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {/* <Filter addFilter={this.addFilter} /> */}
          {/* <Contacts data={this.filterContacts()} /> */}
          <Contacts data={this.state.contacts} />
        </Section>
      </>
    );
  }
}
