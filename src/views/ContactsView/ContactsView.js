import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import Section from '../../components/Section/Section';
import ContactsForm from '../../components/ContactsForm/ContactsForm';
import Filter from '../../components/Filter/Filter';
import Contacts from '../../components/Contacts/Contacts';

import s from './ContactsView.css';

export default function ContactsView() {
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
