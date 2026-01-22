import React, { useState } from 'react';
import './Header.css';

function Header({ onSearch, searchQuery }) {
  const [query, setQuery] = useState(searchQuery || '');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <h1>📚 ENSIKLOPEDIA SASTRA</h1>
            <p>Temukan Informasi Lengkap Sastra Indonesia</p>
          </div>
          <div className="search-container">
            <div className="search-box">
              <input
                type="text"
                placeholder="🔍 Cari pengarang, karya, atau lembaga sastra..."
                value={query}
                onChange={handleSearch}
                className="search-input"
              />
              {query && (
                <button className="search-clear" onClick={handleClear}>
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
