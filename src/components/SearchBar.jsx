// SearchBar.js
import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search products by name"
      className="border p-2 rounded w-full mb-4"
    />
  );
}

export default SearchBar;
