import './App.css'
import { useState, useEffect } from 'react';
import initialContacts from './contacts.json'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [search, setSearch] = useState('');

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
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
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox search={search} onSearch={setSearch}/>
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App
