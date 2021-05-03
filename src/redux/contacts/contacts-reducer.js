import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  filterContacts,
} from './contacts-action';

const itemsReducer = createReducer([], {
  [addSuccess]: (state, { payload }) => [...state, payload],
  [deleteSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addRequest]: () => true,
  [addSuccess]: () => false,
  [addError]: () => false,
  [deleteRequest]: () => true,
  [deleteSuccess]: () => false,
  [deleteError]: () => false,
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
  loading,
});
