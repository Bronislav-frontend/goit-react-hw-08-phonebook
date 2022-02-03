import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contactsReducer;
export const getFilter = state => state.contacts.filterReducer;

export const showFiltered = createSelector(
  getContacts, 
  getFilter, 
  (contacts, filter) => {
    return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
    })
  }
)
