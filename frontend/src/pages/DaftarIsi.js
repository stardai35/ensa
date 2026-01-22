import React, { useState, useEffect } from 'react';
import { contentAPI, categoryAPI } from '../api/axiosConfig';
import Header from '../components/Header';
import ContentCard from '../components/ContentCard';
import './Home.css';

function DaftarIsi() {
  const [contents, setContents] = useState([]);
  const [filteredContents, setFilteredContents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoryResponse = await categoryAPI.getAll();
        setCategories(categoryResponse.data);

        // Fetch contents
        const contentResponse = await contentAPI.getAll();
        setContents(contentResponse.data);
        setFilteredContents(contentResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId === selectedCategory ? null : catId);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(null);
  };

  const getFilteredContents = () => {
    let filtered = contents;

    if (selectedCategory) {
      filtered = filtered.filter(content => content.cat_id === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(content =>
        content.title.toLowerCase().includes(query) ||
        content.text.toLowerCase().includes(query) ||
        (content.description && content.description.toLowerCase().includes(query))
      );
    }

    return filtered;
  };

  const displayedContents = getFilteredContents();

  // Get category stats
  const getCategoryCount = (catId) => {
    return contents.filter(c => c.cat_id === catId).length;
  };

  return (
    <div className="daftarisi">
      <Header onSearch={handleSearch} searchQuery={searchQuery} />
      <div className="main-container">
        {/* Sidebar Categories */}
        <aside className="sidebar">
          <div className="category-sidebar">
            <h3>🎭 Kategori</h3>
            <div className="category-filter">
              <button
                className={`category-item ${selectedCategory === null ? 'active' : ''}`}
                onClick={() => handleSelectCategory(null)}
              >
                <span className="cat-icon">📚</span>
                <span className="cat-name">Semua Kategori</span>
                <span className="cat-count">{contents.length}</span>
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleSelectCategory(category.id)}
                >
                  <span className="cat-icon">
                    {category.id === 1 && '✍️'}
                    {category.id === 2 && '📖'}
                    {category.id === 3 && '📰'}
                    {category.id === 4 && '🏆'}
                    {category.id === 5 && '🏛️'}
                    {category.id === 6 && '✨'}
                  </span>
                  <span className="cat-name">{category.name}</span>
                  <span className="cat-count">{getCategoryCount(category.id)}</span>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="stats-box">
              <div className="stat-item">
                <span className="stat-label">Total Konten</span>
                <span className="stat-value">{contents.length}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Kategori</span>
                <span className="stat-value">{categories.length}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="content-area">
          {/* Filter & Sort Info */}
          <div className="content-header">
            <div className="header-info">
              {selectedCategory ? (
                <h2>
                  Kategori: <strong>{categories.find(c => c.id === selectedCategory)?.name}</strong>
                </h2>
              ) : searchQuery ? (
                <h2>
                  Hasil Pencarian: <strong>"{searchQuery}"</strong>
                </h2>
              ) : (
                <h2>Semua Konten Sastra</h2>
              )}
              <p className="result-count">Ditemukan {displayedContents.length} hasil</p>
            </div>
          </div>

          {/* Content Grid */}
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Memuat konten...</p>
            </div>
          ) : displayedContents.length === 0 ? (
            <div className="no-content-state">
              <div className="empty-icon">🔍</div>
              <h3>Tidak ada konten yang ditemukan</h3>
              <p>Coba pilih kategori lain atau ubah pencarian Anda</p>
              <button
                className="reset-btn"
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="content-grid">
              {displayedContents.map((content) => (
                <ContentCard key={content.id} content={content} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Home;
