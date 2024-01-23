import { useState } from 'react';
import { nanoid } from 'nanoid';

import Section from './section/Section';
import Phonebook from './phonebook/Phonebook';
import Contacts from './contacts/Contacts';

const ContactBook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const checkExistence = contacts.find(
      item => item.name.toUpperCase() === name.toUpperCase()
    );

    checkExistence
      ? alert(`"${name}" is already in contacts`)
      : setContacts([
          ...contacts,
          {
            id: nanoid(),
            name,
            number,
          },
        ]);

    form.reset();
  };

  const handleInputChange = event => {
    setFilter(event.target.value.trim());
  };

  const handleContactDelete = event => {
    setContacts(contacts.filter(item => item.id !== event.target.id));
  };

  return (
    <>
      <Section title="This is my Contact Book">
        <Phonebook handleSubmit={handleSubmit} />
        <Contacts
          handleInputChange={handleInputChange}
          handleDelete={handleContactDelete}
          contacts={contacts}
          filter={filter}
        />
      </Section>
    </>
  );
};

export default ContactBook;
