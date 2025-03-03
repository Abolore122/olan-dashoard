import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Search for a stock or cryptocurrency..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '10px',
          fontSize: '16px',
          marginLeft: '10px',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
