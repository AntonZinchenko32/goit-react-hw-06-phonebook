// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/selectors';

// import { useDispatch } from 'react-redux';
// import { addContacts } from 'redux/actions';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  // const [isItInitialRender, setIsItInitialRender] = useState(true);

  // const contacts = useSelector(getContacts);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   setIsItInitialRender(false);
  //   const savedContacts = JSON.parse(localStorage.getItem('contacts'));

  //   if (savedContacts && dispatch) dispatch(addContacts(contacts));
  // }, [dispatch, contacts]);

  // useEffect(() => {
  //   if (!isItInitialRender)
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts, isItInitialRender]);

  // Додавання контактів із забороною на додавання з однаковими іменами ***************************************************
  // const addContactFunc = newContact => {
  //   const { name, number } = newContact;

  //   // Перевіряємо чи є співпадіння імені серед доданих контактів і імені, що користувач хоче додати
  //   const gotMatch = contacts.find(contact => {
  //     return contact.name === name;
  //   });

  //   if (!gotMatch) {
  //     // Асинхронно додаэмо новий контакт до масиву контактів в стані додатку
  //     if (contacts) setContacts([...contacts, { id: nanoid(), name, number }]);
  //     else setContacts([{ id: nanoid(), name, number }]);
  //   } else {
  //     alert(`${name} already in list`);
  //   }
  // };

  // Фільтрація контактів ***********************************************************************************************
  // const handleFilter = evt => {
  //   setFilter(evt.target.value);
  // };

  // const contactFiltering = () => {
  //   if (filter === '') return contacts;
  //   else {
  //     const filtredContacts = contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     );

  //     return filtredContacts;
  //   }
  // };

  // // Видалення контактів *************************************************************************************************
  // const deleteContact = id => {
  //   setContacts(
  //     contacts.filter(contact => {
  //       return contact.id !== id;
  //     })
  //   );
  // };

  return (
    <div
      style={{
        margin: '15px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1
        style={{
          margin: '15px 0',
          fontSize: '42px',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />

      <h1
        style={{
          margin: '15px 0',
          fontSize: '42px',
        }}
      >
        Contacts
      </h1>
      <Filter />
      <ContactList />
    </div>
  );
};
