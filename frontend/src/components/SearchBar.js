import React, { useState, useEffect } from 'react';
import { contentAPI, categoryAPI } from '../api/axiosConfig';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length > 2) {
      try {
        const response = await contentAPI.search(value);
        setResults(response.data);
        setShowResults(true);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      }
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cari ensiklopedia..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
      {showResults && results.length > 0 && (
        <div className="search-results">
          {results.slice(0, 5).map((result) => (
            <div key={result.id} className="search-result-item">
              <h4>{result.title_id}</h4>
              <p>{result.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
