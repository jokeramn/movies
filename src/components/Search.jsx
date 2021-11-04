import { useState } from "react";

export const Search = ({ onSearchMovie }) => {
  const [search, setSearch] = useState("");

  const searchFormMovie = (e) => {
    e.preventDefault();
    if (search.length) {
      onSearchMovie(search);
      setSearch("");
    } else {
      alert("а ну введи живо фильм");
    }
  };

  return (
    <div className="row">
      <div className="input-field">
        <form onSubmit={searchFormMovie}>
          <input
            placeholder="search"
            type="text"
            className="validate"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn search-btn">Search</button>
        </form>
      </div>
    </div>
  );
};
