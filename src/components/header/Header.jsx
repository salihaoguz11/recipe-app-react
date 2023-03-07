const Header = ({ setQuery }) => {
  return (
    <form>
      <h2>Recipe App</h2>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>SEARCH</button>
      <select name="mealType" id="mealType"></select>
    </form>
  );
};

export default Header;
