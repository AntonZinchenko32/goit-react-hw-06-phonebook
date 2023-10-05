import { combineReducers } from 'redux';

const contactsInitialState = [];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      // Перевіряємо чи є співпадіння імені серед доданих контактів і імені, що користувач хоче додати
      const {name, number, id} = action.payload
      const gotMatch = state.find(contact => {
        return contact.name === name;
      });

      if (!gotMatch) {
        // Асинхронно додаэмо новий контакт до масиву контактів в стані додатку
        return [...state, { name, number, id }]
      } else {
        alert(`${name} already in list`);
      }
      return state
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
