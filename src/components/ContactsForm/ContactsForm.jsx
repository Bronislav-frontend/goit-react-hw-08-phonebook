import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';

import s from './ContactsForm.module.css';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isDublicateName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    const isDublicateNumber = contacts.find(
      contact => contact.number === number,
    );

    if (isDublicateName) {
      alert(`${name} is already in contacts.`);
      return;
    } else if (isDublicateNumber) {
      alert(`${number} is already in contacts.`);
      return;
    } else if (!name.trim() || !number.trim()) {
      alert("Enter the contact's name and number phone!");
      return;
    }
    dispatch(addContact({ name, number }));
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        <p className={s.text}>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          autoComplete="off"
          className={s.input}
        />
      </label>
      <label>
        <p className={s.text}>Phone number</p>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          autoComplete="off"
          className={s.input}
        />
      </label>
      <p className={s.text}>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </p>
    </form>
  );
}
