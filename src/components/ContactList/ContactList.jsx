import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ persons, onDelete }) => {
  return (
    <ul className={css.list}>
      {persons.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <Contact id={id} name={name} number={number} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;