'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { ProductSearchPageProps } from './interfaces/ProductSearchPageProps';
import { debounce } from '@/Utilities/debounce';

const ProductSearchPage: React.FC<ProductSearchPageProps> = ({ onSearch, searchQuery = '' }) => {
  const [searchInput, setSearchInput] = useState<string>(searchQuery);

  const handleSearch = useCallback(
    debounce((query: string) => {
      onSearch(query)
    }, 1000),
    [onSearch]
  )

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
