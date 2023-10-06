import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilterQuery } from './actions';

const savedContacts = localStorage.getItem('contacts');

let contactsInitialState;

if (savedContacts) contactsInitialState = JSON.parse(savedContacts);
else contactsInitialState = [];

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {

//     case addContact.type:
//       // Перевіряємо чи є співпадіння імені серед доданих контактів і імені, що користувач хоче додати
//       const { name, number, id } = action.payload;
//       const gotMatch = state.find(contact => {
//         return contact.name === name;
//       });

//       if (!gotMatch) {
//         // Асинхронно додаэмо новий контакт до масиву контактів в стані додатку
//         const newContactsArr = [...state, { name, number, id }]
//         localStorage.setItem('contacts', JSON.stringify(newContactsArr));
//         return newContactsArr;
//       } else {
//         alert(`${name} already in list`);
//       }
//       return state;
//     // **************************************************
//       case deleteContact.type:
//           const newContactsArr = state.filter(contact => contact.id !== action.payload);
//           localStorage.setItem('contacts', JSON.stringify(newContactsArr));
//       return newContactsArr

//     default:
//       return state;
//   }
// };

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    const { name, number, id } = action.payload;
    const gotMatch = state.find(contact => {
      return contact.name === name;
    });

    if (!gotMatch) {
      state.push({ name, number, id });
      localStorage.setItem('contacts', JSON.stringify(state));
    } else {
      alert(`${name} already in list`);
    }
  },
  [deleteContact]: (state, action) => {
    const newContactsArr = state.filter(contact => contact.id !== action.payload)
    localStorage.setItem('contacts', JSON.stringify(newContactsArr));
    return newContactsArr
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setFilterQuery]: (state, action) => {state=action.payload}
});
