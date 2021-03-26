import React, { Component } from 'react';
import TodoContact from './components/TodoContact';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

class App extends Component {
  state = {};

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('Add componentDidUpdate');

  //   if (this.state.contacts !== prevState.contact) {
  //     console.log('Обновились контакты');

  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <>
        <TodoContact />
        <Filter />
        <ContactsList />
      </>
    );
  }
}

export default App;
