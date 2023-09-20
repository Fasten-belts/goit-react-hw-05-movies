function SearchBar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" autoFocus="on" autoComplete="on" />
      <button type="submit">Search</button>
    </form>
  );
}
export { SearchBar };
