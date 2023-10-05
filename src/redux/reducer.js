const initialState = [];

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContacts':
      return [...state, ...action.payload];

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

    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);

    case 'filter/setFilterQuery':
      return action.payload;

    case 'filter/filteringContacts':
      if (action.payload === '') return state;
      else {
        const filtredState = state.filter(contact =>
          contact.name.toLowerCase().includes(action.payload.toLowerCase())
        );
        return filtredState;
      }

    default:
      return state;
  }
};
