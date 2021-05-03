import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/Add', (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));

export const deleteContact = createAction('contact/Delete');

export const filterContacts = createAction('contact/Filter');

//Pure Redux
// export const addContact = (name, number) => ({
//   type: actionTypes.ADD,
//   payload: { id: uuidv4(), name, number },
// });

// export const deleteContact = id => ({
//   type: actionTypes.DELETE,
//   payload: id,
// });

// export const filterContacts = value => ({
//   type: actionTypes.FILTER,
//   payload: value,
// });
