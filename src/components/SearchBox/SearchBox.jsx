function SearchBox({ search, onSearch }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;