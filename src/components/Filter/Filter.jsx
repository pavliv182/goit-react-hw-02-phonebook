function Filter({ addFilter }) {
  return (
    <div>
      <label htmlFor="filter">
        Find contact by name
        <input
          type="text"
          name="filter"
          id="filter"
          onChange={e => addFilter(e)}
        />
      </label>
    </div>
  );
}

export default Filter;
