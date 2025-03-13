import { IoMdPerson } from 'react-icons/io';
import { HiPhone } from 'react-icons/hi2';
import { MdDelete } from 'react-icons/md';
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.contact}>
      <div className={css.nameBox}>
        <IoMdPerson className={css.icon} />
        <span className={css.name}>{name}</span>
      </div>
      <div className={css.phoneBox}>
        <HiPhone className={css.phoneIcon} />
        <span className={css.phone}>{number}</span>
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        <MdDelete className={css.deleteIcon} />
      </button>
    </div>
  );
};

export default Contact;