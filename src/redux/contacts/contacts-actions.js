import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/Add', (name, number) => {
  return {
    payload: { id: shortid.generate(), name, number },
  };
});
const deleteContact = createAction('contacts/Delete');
const ChangeFilter = createAction('contacts/ChangeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, ChangeFilter };
