import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilterQuery } from './actions';

const savedContacts = localStorage.getItem('contacts');

let contactsInitialState;

if (savedContacts) contactsInitialState = JSON.parse(savedContacts);
else contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    const { name } = action.payload;
    const gotMatch = state.find(contact => {
      return contact.name === name;
    });

    if (!gotMatch) {
      state.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state));
    } else {
      alert(`${name} already in list`);
    }
  },
  [deleteContact]: (state, action) => {
    const newContactsArr = state.filter(
      contact => contact.id !== action.payload
    );
    localStorage.setItem('contacts', JSON.stringify(newContactsArr));
    return newContactsArr;
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setFilterQuery]: (state, action) => (state = action.payload),
});
