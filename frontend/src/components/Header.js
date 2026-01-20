import React from 'react';
import './Header.css';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>ENSIKLOPEDIA SASTRA</h1>
          <p>Ensiklopedia Lengkap Sastra Indonesia</p>
        </div>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
