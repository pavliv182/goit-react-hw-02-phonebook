import PropTypes from 'prop-types';

const Contacts = ({ data, deleteContact }) => {
  const elements = data.map(el => (
    <li key={el.id}>
      {el.name}:{el.number}
      <button type="button" onClick={() => deleteContact(el.id)}>
        Delete
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default Contacts;

Contacts.defaultProps = {
  data: [],
};

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
