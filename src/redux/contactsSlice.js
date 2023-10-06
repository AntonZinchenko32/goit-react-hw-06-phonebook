import { createSlice, nanoid } from "@reduxjs/toolkit";

const savedContacts = localStorage.getItem('contacts');

let contactsInitialState;

if (savedContacts) contactsInitialState = JSON.parse(savedContacts);
else contactsInitialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
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
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid()
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    }
  }
});
// Экспортируем генераторы экшенов и редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;