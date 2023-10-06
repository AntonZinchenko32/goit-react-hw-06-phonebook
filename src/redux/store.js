
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filterReducer } from './reducer';

export const store = configureStore({
    contacts: contactsReducer,
    filter: filterReducer
});
