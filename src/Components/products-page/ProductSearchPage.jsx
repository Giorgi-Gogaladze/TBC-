'use client'; 
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

const debounce = (func, delay) => {
  let timeOut;
  return (...args) => {
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

function ProductSearchPage({ searchQuery }) {
  const [searchInput, setSearchInput] = useState(searchQuery || '');
  const router = useRouter();

  const handleSearch = (query) => {
    if(query) {
      router.push(`/products/search?q=${query}`, {shallow: true});
    } else (
      router.push('/products', {shallow: true})
    );
  };

  const debouncedSearch = useCallback(debounce(handleSearch, 1000), []);

  useEffect(() => {
    if (searchInput) {
      debouncedSearch(searchInput);
    }
  }, [searchInput, debouncedSearch]);

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
