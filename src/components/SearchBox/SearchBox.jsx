import css from './SearchBox.module.css'

function SearchBox({ search, onSearch }) {
  return (
    <div className={css.searchBoxContainer}>
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