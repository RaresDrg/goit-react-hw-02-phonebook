import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

import NameInput from './nameInput/NameInput';
import NumberInput from './numberInput/NumberInput';
import SubmitBtn from './submitBtn/SubmitBtn';

const Phonebook = ({ handleSubmit }) => {
  return (
    <div className={styles.phonebook}>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <NameInput />
        <NumberInput />
        <SubmitBtn text="Add contact" />
      </form>
    </div>
  );
};

Phonebook.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Phonebook;
