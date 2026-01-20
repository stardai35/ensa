import React, { useState, useEffect } from 'react';
import { categoryAPI, contentAPI } from '../api/axiosConfig';
import './CategoryList.css';

function CategoryList({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryAPI.getAll();
        setCategories(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div className="category-list loading">Loading...</div>;
  if (error) return <div className="category-list error">Error: {error}</div>;

  return (
    <div className="category-list">
      <h2>Kategori</h2>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className="category-button"
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
