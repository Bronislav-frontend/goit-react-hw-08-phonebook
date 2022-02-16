import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { filter } from './contacts-actions';

const contactsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_state, { payload }) => {
    return payload;
  },

  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },

  [deleteContact.fulfilled]: (state, { payload }) => {
    const refreshedState = state.filter(({ id }) => id !== payload);
    return refreshedState;
  },
});

const filterReducer = createReducer('', {
  [filter]: (_state, { payload }) => payload,
});

export default combineReducers({
  contactsReducer,
  filterReducer,
});
