import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNav.css';

function AdminNav() {
  return (
    <nav className="admin-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          ENSIKLOPEDIA - ADMIN
        </Link>
        <div className="nav-links">
          <Link to="/admin/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/admin/categories" className="nav-link">
            Categories
          </Link>
          <Link to="/" className="nav-link logout">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default AdminNav;
