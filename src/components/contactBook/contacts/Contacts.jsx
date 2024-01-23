import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

import AbsentContactsNotification from './absentContactsNotification/absentContactsNotification';
import ContactsList from './contactsList/contactsList';
import FilterContactsInput from './filterContactsInput/FilterContactsInput';

const Contacts = ({ handleInputChange, handleDelete, contacts, filter }) => {
  const contactsFiltered = contacts.filter(item =>
    item.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>

      <FilterContactsInput handleInputChange={handleInputChange} />

      {contactsFiltered.length > 0 ? (
        <ContactsList contacts={contactsFiltered} handleDelete={handleDelete} />
      ) : (
        <AbsentContactsNotification searchedContact={filter} />
      )}
    </div>
  );
};

Contacts.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Contacts;
