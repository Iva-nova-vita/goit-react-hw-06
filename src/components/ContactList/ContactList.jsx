import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList({ onDelete }) {
  const contacts = useSelector((state) => state.contacts);
  return (
    <ul className={css.list}>
      {contacts.map((contact, i) => {
        return (
          <Contact
            key={i}
            item={contact}
            onDelete={onDelete}
          ></Contact>
        );
      })}
    </ul>
  );
}
