import React from 'react';

function SearchBar(props) {
  return (
      <input
        type="text"
        placeholder="Search..."
        value={props.filterInput}
        onChange={(e) => props.setFilterInput(e.target.value)}
        className="border w-full rounded-full p-2"
      />
  );
}

export default SearchBar;
