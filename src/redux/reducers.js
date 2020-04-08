import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

const initialState = {
  contacts: [],
  filter_query: "",
};

const onAddContact = (state, { payload }) => ({
  ...state,
  contacts: [...state.contacts, payload],
});
const onRemoveContact = (state, { payload }) => ({
  ...state,
  contacts: [...state.contacts.filter((contact) => contact.id !== payload)],
});
const onFilterContact = (state, { payload }) => ({
  ...state,
  filter_query: payload,
});

export const contacts = createReducer(initialState, {
  [actions.addContact]: onAddContact,
  [actions.removeContact]: onRemoveContact,
  [actions.getFilterQuery]: onFilterContact,
});
