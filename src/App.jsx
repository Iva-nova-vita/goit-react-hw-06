import ContactForm from '../src/components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialState = () => {
    return JSON.parse(localStorage.getItem('contacts')) || [];
  };

  const [contacts, setContacts] = useState(initialState);
  function onDelete(item) {
    setContacts(contacts.filter((contact) => contact !== item));
  }

  const [filter, setFilter] = useState('');
  function updateFilter(e) {
    setFilter(e.target.value.toLowerCase());
  }
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const initialValues = {
    name: '',
    phone: '',
  };

  const onSubmit = (values, actions) => {
    setContacts([...contacts, values]);
    actions.resetForm();
  };

  return (
    <>
      <ContactForm
        initialValues={initialValues}
        onSubmit={onSubmit}
      ></ContactForm>
      <SearchBox updateFilter={updateFilter}></SearchBox>
      <ContactList
        contacts={filteredContacts}
        onDelete={onDelete}
      ></ContactList>
    </>
  );
}

export default App;
