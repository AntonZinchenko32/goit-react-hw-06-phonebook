import { nanoid } from "nanoid";

export const addContacts = contacts => {
    return {
        type: "contacts/addContacts",
        payload: contacts
    }
}

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

export const filteringContacts = value => {
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