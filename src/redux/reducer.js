import { combineReducers } from 'redux';

const savedContacts = localStorage.getItem('contacts');

let contactsInitialState

if (savedContacts) contactsInitialState = JSON.parse(savedContacts)
else contactsInitialState = []

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {

    case 'contacts/addContact':
      // Перевіряємо чи є співпадіння імені серед доданих контактів і імені, що користувач хоче додати
      const { name, number, id } = action.payload;
      const gotMatch = state.find(contact => {
        return contact.name === name;
      });

      if (!gotMatch) {
        // Асинхронно додаэмо новий контакт до масиву контактів в стані додатку
        const newContactsArr = [...state, { name, number, id }]
        localStorage.setItem('contacts', JSON.stringify(newContactsArr));
        return newContactsArr;
      } else {
        alert(`${name} already in list`);
      }
      return state;
    // **************************************************
      case 'contacts/deleteContact':
          const newContactsArr = state.filter(contact => contact.id !== action.payload);
          localStorage.setItem('contacts', JSON.stringify(newContactsArr));
      return newContactsArr

    default:
      return state;
  }
};

const filterInitialState = '';

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilterQuery':
      return action.payload;
    default:
      return state;
  }
};


