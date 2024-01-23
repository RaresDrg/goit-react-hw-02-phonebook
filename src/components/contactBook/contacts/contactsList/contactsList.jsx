import PropTypes from 'prop-types';
import styles from './contactsList.module.css';

const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <ul className={styles.contactsList}>
      {contacts.map(item => (
        <li key={item.id}>
          <span>{item.name.toLowerCase()}</span>: <span>{item.number}</span>
          <button onClick={handleDelete} id={item.id} type="button">
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactsList;
