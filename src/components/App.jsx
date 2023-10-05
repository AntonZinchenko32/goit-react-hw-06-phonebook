import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
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
