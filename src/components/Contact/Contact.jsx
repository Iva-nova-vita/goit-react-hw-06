import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css';

export default function Contact({ item, onDelete }) {
 
  return (
    <li className={css.item}>
      <div className={css.name}><FaUser/>{item.name}</div>
      <div className={css.phone}><FaPhone />{item.phone}</div>
      <button className={css.btnDelete} onClick={()=>onDelete(item)}>
        Delete
      </button>
    </li>
  );
}
