import React, { Component } from 'react';
import TodoContact from './components/TodoContact';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

class App extends Component {
  state = {};

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
