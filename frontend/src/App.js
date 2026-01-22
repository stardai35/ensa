import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import TableOfContents from './pages/TableOfContents';
import Contributors from './pages/Contributors';
import About from './pages/About';
import AdminNav from './admin/components/AdminNav';
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminCategories from './admin/pages/AdminCategories';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/detail/:slug" element={<Detail />} />
        <Route path="/daftar-isi" element={<TableOfContents />} />
        <Route path="/penyusun" element={<Contributors />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Routes - Protected */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <>
                <AdminNav />
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="categories" element={<AdminCategories />} />
                </Routes>
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
