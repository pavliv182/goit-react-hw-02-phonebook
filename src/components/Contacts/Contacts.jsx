const Contacts = ({ data }) => {
  const elements = data.map(el => (
    <li key={el.id}>
      {el.name}:{el.number}
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default Contacts;
