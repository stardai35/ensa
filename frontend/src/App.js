import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import AdminNav from './admin/components/AdminNav';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminCategories from './admin/pages/AdminCategories';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/detail/:slug" element={<Detail />} />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <>
              <AdminNav />
              <Routes>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="categories" element={<AdminCategories />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
