'use client';
import React, { useEffect, useState } from 'react';

const debounce = (func, delay) => {
  let timeOut;
  return (...args) => {
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

function ProductSearchPage({ onSearch, searchQuery }) {
  const [searchInput, setSearchInput] = useState(searchQuery || '');

  const handleSearch = debounce((query) => {
    if (onSearch) {
      onSearch(query);
    }
  }, 1000);

  useEffect(() => {
    handleSearch(searchInput);
  }, [searchInput, handleSearch]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search product by name . . ."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default ProductSearchPage;
