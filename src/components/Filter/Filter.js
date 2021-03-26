import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => (
  <div className={s.filterTitle}>
    <h2>Contacts</h2>
    <label className={s.labelStyle}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

Filter.defaultProps = {
  filterValue: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

// const getVisibileContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = state => {
//   const { filter, contacts } = state.contacts;

//   const visibleContacts = getVisibileContacts(contacts, filter);
//   return { contacts: visibleContacts };
// };

// const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
//   contacts: getVisibileContacts(contacts, filter),
// });

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.ChangeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
