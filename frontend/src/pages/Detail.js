import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { contentAPI } from '../api/axiosConfig';
import './Detail.css';

function Detail() {
  const { slug } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await contentAPI.getBySlug(slug);
        setContent(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContent();
  }, [slug]);

  if (loading) return <div className="detail loading">Loading...</div>;
  if (error) return <div className="detail error">Error: {error}</div>;
  if (!content) return <div className="detail not-found">Content not found</div>;

  return (
    <div className="detail">
      <div className="detail-header">
        <a href="/" className="back-link">← Kembali</a>
        <h1>{content.title_id}</h1>
        <div className="meta">
          <span className="category">{content.category_name}</span>
          <span className="year">{content.year}</span>
        </div>
      </div>
      <div className="detail-body">
        <div className="content-text" dangerouslySetInnerHTML={{ __html: content.text }} />
      </div>
    </div>
  );
}

export default Detail;
