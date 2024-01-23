import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const filterInputId = nanoid();

const FilterContactsInput = ({ handleInputChange }) => {
  return (
    <>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="filter"
        id={filterInputId}
        pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </>
  );
};

FilterContactsInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};

export default FilterContactsInput;
