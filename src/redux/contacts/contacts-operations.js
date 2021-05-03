import axios from 'axios';
import {
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  fetchRequest,
  fetchSuccess,
  fetchError,
} from './contacts-action';

axios.default.baseURL = 'http://localhost:3004';

export const fetchContacts = () => dispatch => {
  dispatch(fetchRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchError(error)));
};

export const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addSuccess(data)))
    .catch(error => dispatch(addError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteSuccess(id)))
    .catch(error => dispatch(deleteError(error)));
};
