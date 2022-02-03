import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { showFiltered } from '../../redux/contacts/contacts-selectors'
import { deleteContact } from '../../redux/contacts/contacts-operations';

import s from './Contacts.module.css'

export default function Contacts () {
  const contacts = useSelector(showFiltered);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name}</p>
          <p className={s.text}>{number}</p>
          <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
};