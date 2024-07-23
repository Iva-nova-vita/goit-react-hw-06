import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter);
  });
  console.log(filteredContacts);
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact, i) => {
        return <Contact key={i} item={contact}></Contact>;
      })}
    </ul>
  );
}
