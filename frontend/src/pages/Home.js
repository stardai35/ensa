import React, { useState, useEffect } from 'react';
import { contentAPI } from '../api/axiosConfig';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import ContentCard from '../components/ContentCard';
import './Home.css';

function Home() {
  const [contents, setContents] = useState([]);
  const [filteredContents, setFilteredContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await contentAPI.getAll();
        setContents(response.data);
        setFilteredContents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contents:', error);
        setLoading(false);
      }
    };

    fetchContents();
  }, []);

  const handleSelectCategory = async (catId) => {
    setSelectedCategory(catId);
    if (catId === null) {
      setFilteredContents(contents);
    } else {
      try {
        const response = await contentAPI.getByCategory(catId);
        setFilteredContents(response.data);
      } catch (error) {
        console.error('Error filtering by category:', error);
      }
    }
  };

  return (
    <div className="home">
      <Header />
      <div className="container">
        <CategoryList onSelectCategory={handleSelectCategory} />
        
        {loading ? (
          <div className="loading">Loading...</div>
        ) : filteredContents.length === 0 ? (
          <div className="no-content">Tidak ada konten yang ditemukan</div>
        ) : (
          <div className="content-grid">
            {filteredContents.map((content) => (
              <ContentCard key={content.id} content={content} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
