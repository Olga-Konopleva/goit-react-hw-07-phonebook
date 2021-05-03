import ContactItem from './ContactItem';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Ul = styled.ul`
  list-style: none;
  padding-left: 5px;
`;

const getFilterContacts = ({ contacts: { items, filter } }) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter),
  );
};

const ContactList = () => {
  const contacts = useSelector(getFilterContacts);
  return (
    <Ul>
      {contacts.map(({ id }) => (
        <ContactItem key={id} id={id} />
      ))}
    </Ul>
  );
};

export default ContactList;
