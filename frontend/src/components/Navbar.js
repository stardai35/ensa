import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📚 ENSIKLOPEDIA SASTRA
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/')}`}
            >
              🏠 Beranda
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/daftar-isi"
              className={`nav-link ${isActive('/daftar-isi')}`}
            >
              📖 Daftar Isi
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/penyusun"
              className={`nav-link ${isActive('/penyusun')}`}
            >
              👥 Penyusun
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/tentang"
              className={`nav-link ${isActive('/tentang')}`}
            >
              ℹ️ Tentang
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
