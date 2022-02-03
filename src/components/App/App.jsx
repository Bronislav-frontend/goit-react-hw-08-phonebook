import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import Section from '../Section/Section';
import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import Contacts from '../Contacts/Contacts';

import s from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </div>
  );
}
