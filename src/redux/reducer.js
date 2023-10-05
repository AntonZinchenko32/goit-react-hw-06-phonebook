import { combineReducers } from 'redux';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    // ********************************************
    case 'contacts/addContact':
      // Перевіряємо чи є співпадіння імені серед доданих контактів і імені, що користувач хоче додати
      const { name, number, id } = action.payload;
      const gotMatch = state.find(contact => {
        return contact.name === name;
      });

      if (!gotMatch) {
        // Асинхронно додаэмо новий контакт до масиву контактів в стані додатку
        return [...state, { name, number, id }];
      } else {
        alert(`${name} already in list`);
      }
      return state;
    // **************************************************
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

const filterInitialState = '';

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilterQuery':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
