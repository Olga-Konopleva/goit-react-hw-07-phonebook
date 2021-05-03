import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, filterContacts } from './contacts-action';

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});
// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       return [...state, payload];
//     case actionTypes.DELETE:
//       return state.filter(item => item.id !== payload);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
