import css from './App.module.css'
import { useState, useEffect } from 'react';
import initialContacts from './contacts.json'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });
  const [search, setSearch] = useState('');

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  }

  const deleteContact = (constactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== constactId);
    });
  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox search={search} onSearch={setSearch}/>
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App
