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
