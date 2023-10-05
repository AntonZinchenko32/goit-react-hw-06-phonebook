import { nanoid } from "nanoid";


export const addContact = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};

export const setFilterQuery = value => {
  return {
    type: "filter/setFilterQuery",
    payload: value,
  };
};

// export const filteringContacts = contacts => {
//   return {
//     type: "filter/filteringContacts",
//     payload: contacts,
//   };
// };