import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { filter } from './contacts-actions'

const contactsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_state, { payload }) => {
    return payload
  },

  [addContact.fulfilled]: (state, { payload }) => {
    const isDublicateName =  state.find(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase()
    );
    const isDublicateNumber = state.find(
      contact => contact.number === payload.number,
    );

    if (isDublicateName) {
      alert(`${payload.name} is already in contacts.`);
      return
    } else if (isDublicateNumber) {
       alert(`${payload.number} is already in contacts.`);
       return;
    } else if (!payload.name.trim() || !payload.number.trim()) {
       alert("Enter the contact's name and number phone!");
       return
    } return [...state, payload];
  },

  [deleteContact.fulfilled]: (state, {payload}) => {
   state.filter(({ id }) => id !== payload)
  }
});

const filterReducer = createReducer('', {
  [filter]: (_state, { payload }) => payload,
});

export default combineReducers({
  contactsReducer,
  filterReducer,
});